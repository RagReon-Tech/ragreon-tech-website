/**
 * RagReon Tech - Consultation & Project Discovery CRM API
 * Google Apps Script Web Application
 *
 * Requirements:
 * - Spreadsheet: "RagReon Tech - Client Enquiries" (ID: 1HfpLvbHv3ZEj7prqgYUSdAYWGi10l2DpsqG7z-1ZVmc)
 * - Worksheets:
 *   1. "Enquiries" (Workflow A: Consultation Modal & Contact Form)
 *   2. "Project Enquiries" (Workflow B: Project Discovery Wizard)
 * - Notification recipient: ragreontechofficial@gmail.com
 * - Concurrency control: LockService (Script Lock)
 * - Formula injection protection on all client strings
 * - Server-side validation with strict workflow allowlisting
 */

// Configuration Constants
const CONFIG = {
  SPREADSHEET_NAME: 'RagReon Tech - Client Enquiries',
  SPREADSHEET_ID: '1HfpLvbHv3ZEj7prqgYUSdAYWGi10l2DpsqG7z-1ZVmc',
  SHEET_CONSULTATION: 'Enquiries',
  SHEET_PROJECT_DISCOVERY: 'Project Enquiries',
  NOTIFICATION_EMAIL: 'ragreontechofficial@gmail.com',
  TIMEZONE: 'Asia/Kolkata',

  // Workflow A: Consultation Sheet Columns (10 columns)
  HEADERS_CONSULTATION: [
    'Enquiry ID',
    'Submitted At',
    'Client Name',
    'Client Email',
    'Phone Number',
    'Service Interested In',
    'Project Budget',
    'Project Details',
    'Status',
    'Email Notification Status',
  ],

  // Workflow B: Project Discovery Sheet Columns (19 columns)
  HEADERS_PROJECT_DISCOVERY: [
    'Enquiry ID',
    'Submitted At',
    'Client Name',
    'Client Email',
    'Phone Number',
    'Company / Organization',
    'Idea Stage',
    'Domains',
    'Project Types',
    'Project Idea / Problem',
    'Expected Outcome',
    'Target Users',
    'Existing Resources',
    'Key Features',
    'Technical Constraints',
    'Project Budget',
    'Expected Timeline',
    'Status',
    'Email Notification Status',
  ],
};

/**
 * Health Check & Deployment Ping (GET request)
 * Allows developers and users to verify that the Web App URL is online directly from a browser.
 */
function doGet(e) {
  const status = {
    status: 'ok',
    service: 'RagReon Tech Consultation & Project Discovery CRM API',
    supportedWorkflows: [CONFIG.SHEET_CONSULTATION, CONFIG.SHEET_PROJECT_DISCOVERY],
    timestamp: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss 'IST'"),
    instructions: 'Submit POST requests with JSON payload specifying submissionType ("consultation" or "project_discovery").',
  };
  return createJsonResponse(status);
}

/**
 * Handle incoming form submissions (POST request)
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent requests to clear
  try {
    lock.waitLock(30000);
  } catch (err) {
    return createJsonResponse({
      success: false,
      message: 'Server is busy processing concurrent enquiries. Please try again.',
      details: 'Lock timeout exceeded.',
    });
  }

  try {
    // 1. Parse incoming payload
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        if (e.parameter) {
          data = e.parameter;
        } else {
          return createJsonResponse({
            success: false,
            message: 'Invalid payload. JSON format expected.',
          });
        }
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    } else {
      return createJsonResponse({
        success: false,
        message: 'No data received.',
      });
    }

    // 2. Server-Side Validation & Sanitization
    const validation = validateEnquiryData(data);
    if (!validation.valid) {
      return createJsonResponse({
        success: false,
        message: validation.message,
        details: validation.errors,
      });
    }

    const cleanData = validation.sanitizedData;
    const submissionType = cleanData.submissionType; // 'consultation' or 'project_discovery'

    // 3. Generate Enquiry ID and Server Timestamp
    const timestamp = Utilities.formatDate(
      new Date(),
      CONFIG.TIMEZONE,
      "yyyy-MM-dd HH:mm:ss 'IST'"
    );
    const datePrefix = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyyMMdd');
    const randomSuffix = ('0000' + Math.floor(Math.random() * 10000)).slice(-4);
    const enquiryId = 'RAG-' + datePrefix + '-' + randomSuffix;

    // 4. Route to the appropriate destination worksheet
    let targetSheetName = CONFIG.SHEET_CONSULTATION;
    let rowValues = [];
    let emailStatusColIndex = 10;

    if (submissionType === 'project_discovery') {
      targetSheetName = CONFIG.SHEET_PROJECT_DISCOVERY;
      emailStatusColIndex = 19;

      rowValues = [
        enquiryId,
        timestamp,
        sanitizeForSpreadsheet(cleanData.name),
        sanitizeForSpreadsheet(cleanData.email),
        sanitizeForSpreadsheet(cleanData.phone || 'N/A'),
        sanitizeForSpreadsheet(cleanData.company || 'N/A'),
        sanitizeForSpreadsheet(cleanData.ideaStage || 'N/A'),
        sanitizeForSpreadsheet(cleanData.domainsString || 'Not specified'),
        sanitizeForSpreadsheet(cleanData.projectTypesString || 'Not specified'),
        sanitizeForSpreadsheet(cleanData.projectIdea || cleanData.message),
        sanitizeForSpreadsheet(cleanData.expectedOutcome || 'N/A'),
        sanitizeForSpreadsheet(cleanData.targetUsers || 'N/A'),
        sanitizeForSpreadsheet(cleanData.existingResourcesString || 'None yet'),
        sanitizeForSpreadsheet(cleanData.keyFeatures || 'N/A'),
        sanitizeForSpreadsheet(cleanData.constraints || 'None'),
        sanitizeForSpreadsheet(cleanData.budget || 'Not specified'),
        sanitizeForSpreadsheet(cleanData.timeline || 'Flexible / Need Guidance'),
        'New',
        'Pending', // Updated after email attempt
      ];
    } else {
      // Default / Consultation workflow
      targetSheetName = CONFIG.SHEET_CONSULTATION;
      emailStatusColIndex = 10;

      rowValues = [
        enquiryId,
        timestamp,
        sanitizeForSpreadsheet(cleanData.name),
        sanitizeForSpreadsheet(cleanData.email),
        sanitizeForSpreadsheet(cleanData.phone || 'N/A'),
        sanitizeForSpreadsheet(cleanData.service || 'General Consultation'),
        sanitizeForSpreadsheet(cleanData.budget || 'Not specified'),
        sanitizeForSpreadsheet(cleanData.message),
        'New',
        'Pending', // Updated after email attempt
      ];
    }

    const sheet = getOrCreateSheet(targetSheetName);
    sheet.appendRow(rowValues);
    const rowIndex = sheet.getLastRow();

    // 5. Send Gmail Notification
    let emailSent = false;
    let emailStatusText = 'Not Sent';

    try {
      sendGmailNotification({
        submissionType: submissionType,
        enquiryId: enquiryId,
        submittedAt: timestamp,
        data: cleanData,
      });
      emailSent = true;
      emailStatusText = 'Sent';
    } catch (emailError) {
      emailSent = false;
      emailStatusText = 'Failed: ' + (emailError.message || String(emailError));
      Logger.log('Gmail notification failed: ' + emailStatusText);
    }

    // 6. Update Email Notification Status in the corresponding column
    sheet.getRange(rowIndex, emailStatusColIndex).setValue(emailStatusText);

    // 7. Return structured success response
    return createJsonResponse({
      success: true,
      enquiryId: enquiryId,
      submissionType: submissionType,
      worksheet: targetSheetName,
      emailSent: emailSent,
      message: emailSent
        ? 'Thank you for reaching out. Your project enquiry has been saved successfully.'
        : 'Your enquiry was saved to our CRM, but automated notification email delivery was delayed.',
      timestamp: timestamp,
    });
  } catch (err) {
    Logger.log('Fatal doPost error: ' + err.toString());
    return createJsonResponse({
      success: false,
      message: 'Failed to process enquiry on the server. Please try again.',
      details: err.toString(),
    });
  } finally {
    // Release the script lock
    try {
      lock.releaseLock();
    } catch (e) {
      Logger.log('Error releasing lock: ' + e);
    }
  }
}

/**
 * Validates and sanitizes incoming enquiry data
 */
function validateEnquiryData(data) {
  const errors = {};

  // Submission Type Validation & Allowlisting
  let submissionType = (data.submissionType || '').trim().toLowerCase();
  if (!submissionType) {
    // Safe backward compatibility: default to 'consultation'
    submissionType = 'consultation';
  } else if (submissionType !== 'consultation' && submissionType !== 'project_discovery') {
    errors.submissionType =
      'Invalid submissionType "' + submissionType + '". Supported types: "consultation", "project_discovery".';
  }

  // Common Client Name Validation
  const name = (data.name || '').trim();
  if (!name) {
    errors.name = 'Client name is required.';
  } else if (name.length < 2) {
    errors.name = 'Client name must be at least 2 characters.';
  } else if (name.length > 100) {
    errors.name = 'Client name cannot exceed 100 characters.';
  }

  // Common Client Email Validation
  const email = (data.email || '').trim();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid email address format.';
  } else if (email.length > 150) {
    errors.email = 'Email address cannot exceed 150 characters.';
  }

  // Common Phone Validation (Optional)
  const phone = (data.phone || '').trim();
  if (phone && phone.length > 35) {
    errors.phone = 'Phone number cannot exceed 35 characters.';
  }

  // Workflow A: Consultation Validation
  let service = (data.service || '').trim();
  let message = (data.message || '').trim();
  let budget = (data.budget || '').trim();

  // Workflow B: Project Discovery Fields
  let company = (data.company || '').trim();
  let ideaStage = (data.ideaStage || '').trim();
  let projectIdea = (data.projectIdea || '').trim();
  let expectedOutcome = (data.expectedOutcome || '').trim();
  let targetUsers = (data.targetUsers || '').trim();
  let keyFeatures = (data.keyFeatures || '').trim();
  let constraints = (data.constraints || '').trim();
  let timeline = (data.timeline || '').trim();

  // Multi-select formatting for project discovery
  let domainsString = '';
  if (Array.isArray(data.domains)) {
    domainsString = data.domains
      .map(function(d) {
        return d === 'Other' && data.otherDomainText ? 'Other (' + data.otherDomainText + ')' : d;
      })
      .join(', ');
  } else if (typeof data.domains === 'string') {
    domainsString = data.domains;
  }

  let projectTypesString = '';
  if (Array.isArray(data.projectTypes)) {
    projectTypesString = data.projectTypes.join(', ');
  } else if (typeof data.projectTypes === 'string') {
    projectTypesString = data.projectTypes;
  }

  let existingResourcesString = '';
  if (Array.isArray(data.existingResources)) {
    existingResourcesString = data.existingResources.join(', ');
  } else if (typeof data.existingResources === 'string') {
    existingResourcesString = data.existingResources;
  }

  if (submissionType === 'consultation') {
    if (!service) {
      errors.service = 'Service selection is required.';
    }
    if (!message) {
      errors.message = 'Project details are required.';
    } else if (message.length < 10) {
      errors.message = 'Project details must be at least 10 characters long.';
    }
  } else if (submissionType === 'project_discovery') {
    // In project discovery, ensure at least project idea or message is provided
    if (!projectIdea && !message) {
      errors.projectIdea = 'Project idea or problem description is required.';
    } else if (projectIdea && projectIdea.length < 5) {
      errors.projectIdea = 'Project idea must be at least 5 characters long.';
    }
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    valid: isValid,
    message: isValid ? 'Validation passed' : 'Validation failed. Please correct the highlighted fields.',
    errors: errors,
    sanitizedData: {
      submissionType: submissionType,
      name: name,
      email: email,
      phone: phone,
      company: company,
      service: service,
      budget: budget,
      message: message,
      ideaStage: ideaStage,
      domainsString: domainsString,
      projectTypesString: projectTypesString,
      projectIdea: projectIdea || message,
      expectedOutcome: expectedOutcome,
      targetUsers: targetUsers,
      existingResourcesString: existingResourcesString,
      keyFeatures: keyFeatures,
      constraints: constraints,
      timeline: timeline,
    },
  };
}

/**
 * Formula Injection Protection
 * If a string begins with dangerous spreadsheet formula characters (=, +, -, @, tab, return),
 * prepend a single quote to force Google Sheets to treat it as a literal string.
 */
function sanitizeForSpreadsheet(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (/^[\=\+\-\@\t\r]/.test(str)) {
    return "'" + str;
  }
  return str;
}

/**
 * Retrieves the spreadsheet by configured ID or active context.
 */
function getOrCreateSpreadsheet() {
  const scriptProps = PropertiesService.getScriptProperties();
  const configuredId = scriptProps.getProperty('SPREADSHEET_ID') || CONFIG.SPREADSHEET_ID;

  let ss;
  if (configuredId) {
    try {
      ss = SpreadsheetApp.openById(configuredId);
    } catch (e) {
      Logger.log('Could not open spreadsheet by configured ID, falling back: ' + e);
    }
  }

  if (!ss) {
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (e) {}
  }

  if (!ss) {
    const files = DriveApp.getFilesByName(CONFIG.SPREADSHEET_NAME);
    if (files.hasNext()) {
      ss = SpreadsheetApp.open(files.next());
    }
  }

  if (!ss) {
    ss = SpreadsheetApp.create(CONFIG.SPREADSHEET_NAME);
    scriptProps.setProperty('SPREADSHEET_ID', ss.getId());
  }

  return ss;
}

/**
 * Idempotently retrieves or creates a specific worksheet tab and initializes headers.
 */
function getOrCreateSheet(sheetName) {
  const ss = getOrCreateSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  // Check if headers exist; if empty, initialize headers
  if (sheet.getLastRow() === 0) {
    const headers =
      sheetName === CONFIG.SHEET_PROJECT_DISCOVERY
        ? CONFIG.HEADERS_PROJECT_DISCOVERY
        : CONFIG.HEADERS_CONSULTATION;

    sheet.appendRow(headers);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#0B132B');
    headerRange.setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);

    // Apply sensible default column widths
    if (sheetName === CONFIG.SHEET_PROJECT_DISCOVERY) {
      sheet.setColumnWidth(1, 160); // Enquiry ID
      sheet.setColumnWidth(2, 170); // Submitted At
      sheet.setColumnWidth(3, 160); // Client Name
      sheet.setColumnWidth(4, 210); // Client Email
      sheet.setColumnWidth(5, 140); // Phone Number
      sheet.setColumnWidth(6, 170); // Company / Org
      sheet.setColumnWidth(7, 180); // Idea Stage
      sheet.setColumnWidth(8, 220); // Domains
      sheet.setColumnWidth(9, 200); // Project Types
      sheet.setColumnWidth(10, 300); // Project Idea / Problem
      sheet.setColumnWidth(11, 250); // Expected Outcome
      sheet.setColumnWidth(12, 160); // Target Users
      sheet.setColumnWidth(13, 200); // Existing Resources
      sheet.setColumnWidth(14, 300); // Key Features
      sheet.setColumnWidth(15, 220); // Constraints
      sheet.setColumnWidth(16, 140); // Budget
      sheet.setColumnWidth(17, 160); // Timeline
      sheet.setColumnWidth(18, 100); // Status
      sheet.setColumnWidth(19, 180); // Email Status
    } else {
      sheet.setColumnWidth(1, 160); // Enquiry ID
      sheet.setColumnWidth(2, 170); // Submitted At
      sheet.setColumnWidth(3, 160); // Client Name
      sheet.setColumnWidth(4, 210); // Client Email
      sheet.setColumnWidth(5, 140); // Phone Number
      sheet.setColumnWidth(6, 230); // Service Interested In
      sheet.setColumnWidth(7, 140); // Budget
      sheet.setColumnWidth(8, 350); // Project Details
      sheet.setColumnWidth(9, 100); // Status
      sheet.setColumnWidth(10, 180); // Email Status
    }
  }

  return sheet;
}

/**
 * Sends a workflow-specific notification email to the configured official RagReon Tech address.
 */
function sendGmailNotification(params) {
  const scriptProps = PropertiesService.getScriptProperties();
  const recipient =
    scriptProps.getProperty('NOTIFICATION_EMAIL') || CONFIG.NOTIFICATION_EMAIL;

  const data = params.data;
  const isProjectDiscovery = params.submissionType === 'project_discovery';

  const subject = isProjectDiscovery
    ? `[RagReon Tech] New Project Enquiry - ${data.name}`
    : `[RagReon Tech] New Consultation Enquiry - ${data.name}`;

  let plainBody = '';
  let htmlBody = '';

  if (isProjectDiscovery) {
    plainBody = [
      `NEW PROJECT ENQUIRY (DISCOVERY WIZARD)`,
      `========================================`,
      `Enquiry ID:       ${params.enquiryId}`,
      `Submitted At:     ${params.submittedAt}`,
      `Worksheet:        ${CONFIG.SHEET_PROJECT_DISCOVERY}`,
      ``,
      `CLIENT DETAILS:`,
      `Name:             ${data.name}`,
      `Email:            ${data.email}`,
      `Phone:            ${data.phone || 'Not provided'}`,
      `Company / Org:    ${data.company || 'Not provided'}`,
      ``,
      `PROJECT SCOPE & DISCOVERY:`,
      `Idea Stage:       ${data.ideaStage || 'Not specified'}`,
      `Domains:          ${data.domainsString || 'Not specified'}`,
      `Project Types:    ${data.projectTypesString || 'Not specified'}`,
      `Target Users:     ${data.targetUsers || 'Not specified'}`,
      `Resources:        ${data.existingResourcesString || 'None yet'}`,
      `Budget Range:     ${data.budget || 'Not specified'}`,
      `Target Timeline:  ${data.timeline || 'Flexible / Need Guidance'}`,
      ``,
      `PROJECT VISION / PROBLEM:`,
      data.projectIdea || data.message,
      ``,
      `EXPECTED OUTCOME:`,
      data.expectedOutcome || 'Not specified',
      ``,
      `KEY FEATURES:`,
      data.keyFeatures || 'Not specified',
      ``,
      `CONSTRAINTS / TECH:`,
      data.constraints || 'None specified',
      ``,
      `Status:           New`,
      `========================================`,
      `Submitted via RagReon Tech Project Discovery Wizard (/start-project).`,
    ].join('\n');

    htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
            .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #060D1E 0%, #0B1A3A 100%); padding: 32px 28px; color: #ffffff; }
            .eyebrow { color: #0EA5E9; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 6px; }
            .title { font-size: 22px; font-weight: 800; margin: 0; color: #ffffff; }
            .content { padding: 28px; }
            .badge { display: inline-block; background-color: #eff6ff; color: #0066FF; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; font-family: monospace; border: 1px solid #bfdbfe; margin-bottom: 20px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .table td { padding: 8px 12px; font-size: 13px; border-bottom: 1px solid #f1f5f9; }
            .table td.label { width: 35%; color: #64748b; font-weight: 600; }
            .table td.val { width: 65%; color: #0f172a; font-weight: 500; }
            .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #0066FF; margin: 18px 0 6px 0; }
            .message-box { background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 14px; font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 12px; }
            .actions { text-align: center; padding-top: 14px; }
            .button { display: inline-block; background-color: #0066FF; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-size: 13px; font-weight: 700; }
            .footer { background: #f8fafc; padding: 16px 28px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="eyebrow">RAGREON TECH • PROJECT DISCOVERY WIZARD</div>
              <h1 class="title">New Project Brief Received</h1>
            </div>
            <div class="content">
              <div class="badge">Enquiry ID: ${params.enquiryId} &bull; Tab: ${CONFIG.SHEET_PROJECT_DISCOVERY}</div>
              
              <div class="section-title">Client Information</div>
              <table class="table">
                <tr><td class="label">Name:</td><td class="val">${escapeHtml(data.name)}</td></tr>
                <tr><td class="label">Email:</td><td class="val"><a href="mailto:${escapeHtml(data.email)}" style="color:#0066FF;">${escapeHtml(data.email)}</a></td></tr>
                <tr><td class="label">Phone:</td><td class="val">${escapeHtml(data.phone || 'Not provided')}</td></tr>
                <tr><td class="label">Company / Org:</td><td class="val">${escapeHtml(data.company || 'Not provided')}</td></tr>
                <tr><td class="label">Submitted At:</td><td class="val">${params.submittedAt}</td></tr>
              </table>

              <div class="section-title">Project Scope & Type</div>
              <table class="table">
                <tr><td class="label">Idea Stage:</td><td class="val">${escapeHtml(data.ideaStage || 'Not specified')}</td></tr>
                <tr><td class="label">Domain(s):</td><td class="val"><strong>${escapeHtml(data.domainsString || 'Not specified')}</strong></td></tr>
                <tr><td class="label">Project Type(s):</td><td class="val"><strong>${escapeHtml(data.projectTypesString || 'Not specified')}</strong></td></tr>
                <tr><td class="label">Target Users:</td><td class="val">${escapeHtml(data.targetUsers || 'Not specified')}</td></tr>
                <tr><td class="label">Existing Resources:</td><td class="val">${escapeHtml(data.existingResourcesString || 'None yet')}</td></tr>
                <tr><td class="label">Budget Range:</td><td class="val">${escapeHtml(data.budget || 'Not specified')}</td></tr>
                <tr><td class="label">Expected Timeline:</td><td class="val">${escapeHtml(data.timeline || 'Flexible / Need Guidance')}</td></tr>
              </table>

              <div class="section-title">Project Idea / Problem</div>
              <div class="message-box">${escapeHtml(data.projectIdea || data.message).replace(/\n/g, '<br/>')}</div>

              <div class="section-title">Expected Outcome</div>
              <div class="message-box">${escapeHtml(data.expectedOutcome || 'Not specified').replace(/\n/g, '<br/>')}</div>

              <div class="section-title">Key Features & Requirements</div>
              <div class="message-box">${escapeHtml(data.keyFeatures || 'Not specified').replace(/\n/g, '<br/>')}</div>

              ${data.constraints ? '<div class="section-title">Technical Constraints</div><div class="message-box">' + escapeHtml(data.constraints).replace(/\n/g, '<br/>') + '</div>' : ''}

              <div class="actions">
                <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Project%20Discovery%20Brief%20-%20RagReon%20Tech" class="button">Reply to Client</a>
              </div>
            </div>
            <div class="footer">
              RagReon Tech CRM &bull; Automated Project Dispatch System &bull; Sheet: ${CONFIG.SHEET_PROJECT_DISCOVERY}
            </div>
          </div>
        </body>
      </html>
    `;
  } else {
    // Consultation Email Body
    plainBody = [
      `NEW CONSULTATION ENQUIRY`,
      `================================`,
      `Enquiry ID:  ${params.enquiryId}`,
      `Date & Time: ${params.submittedAt}`,
      `Worksheet:   ${CONFIG.SHEET_CONSULTATION}`,
      ``,
      `CLIENT DETAILS:`,
      `Name:        ${data.name}`,
      `Email:       ${data.email}`,
      `Phone:       ${data.phone || 'Not provided'}`,
      ``,
      `PROJECT DETAILS:`,
      `Service:     ${data.service}`,
      `Budget:      ${data.budget || 'Not specified'}`,
      `Details:`,
      data.message,
      ``,
      `Status:      New`,
      `================================`,
      `Submitted from RagReon Tech consultation modal.`,
    ].join('\n');

    htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #060D1E 0%, #0B1A3A 100%); padding: 32px 28px; color: #ffffff; }
            .eyebrow { color: #0EA5E9; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 6px; }
            .title { font-size: 22px; font-weight: 800; margin: 0; color: #ffffff; }
            .content { padding: 28px; }
            .badge { display: inline-block; background-color: #eff6ff; color: #0066FF; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; font-family: monospace; border: 1px solid #bfdbfe; margin-bottom: 20px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .table td { padding: 10px 12px; font-size: 13px; border-bottom: 1px solid #f1f5f9; }
            .table td.label { width: 35%; color: #64748b; font-weight: 600; }
            .table td.val { width: 65%; color: #0f172a; font-weight: 500; }
            .message-box { background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px; font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 24px; }
            .actions { text-align: center; padding-top: 10px; }
            .button { display: inline-block; background-color: #0066FF; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-size: 13px; font-weight: 700; }
            .footer { background: #f8fafc; padding: 16px 28px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="eyebrow">RAGREON TECH CRM NOTIFICATION</div>
              <h1 class="title">New Client Consultation Enquiry</h1>
            </div>
            <div class="content">
              <div class="badge">Enquiry ID: ${params.enquiryId} &bull; Tab: ${CONFIG.SHEET_CONSULTATION}</div>
              <table class="table">
                <tr><td class="label">Client Name:</td><td class="val">${escapeHtml(data.name)}</td></tr>
                <tr><td class="label">Client Email:</td><td class="val"><a href="mailto:${escapeHtml(data.email)}" style="color:#0066FF;">${escapeHtml(data.email)}</a></td></tr>
                <tr><td class="label">Phone Number:</td><td class="val">${escapeHtml(data.phone || 'Not provided')}</td></tr>
                <tr><td class="label">Service Requested:</td><td class="val"><strong>${escapeHtml(data.service)}</strong></td></tr>
                <tr><td class="label">Project Budget:</td><td class="val">${escapeHtml(data.budget || 'Not specified')}</td></tr>
                <tr><td class="label">Submitted At:</td><td class="val">${params.submittedAt}</td></tr>
                <tr><td class="label">Status:</td><td class="val"><span style="color:#10b981;font-weight:700;">New</span></td></tr>
              </table>

              <div style="font-weight:700;font-size:12px;color:#475569;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px;">Project Requirements:</div>
              <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br/>')}</div>

              <div class="actions">
                <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Project%20Consultation%20-%20RagReon%20Tech" class="button">Reply via Email</a>
              </div>
            </div>
            <div class="footer">
              RagReon Tech Official Website CRM &bull; Sheet: ${CONFIG.SHEET_CONSULTATION}
            </div>
          </div>
        </body>
      </html>
    `;
  }

  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
    name: 'RagReon Tech CRM',
    replyTo: data.email,
  });
}

/**
 * Escapes HTML entities to prevent HTML injection in emails.
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Utility to create a standardized JSON response output for Google Apps Script.
 */
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

/**
 * Setup Utility Function
 * Idempotently initializes both worksheets without deleting or overwriting any existing records.
 */
function setupSpreadsheet() {
  const consultationSheet = getOrCreateSheet(CONFIG.SHEET_CONSULTATION);
  const projectSheet = getOrCreateSheet(CONFIG.SHEET_PROJECT_DISCOVERY);

  Logger.log('Spreadsheet URL: ' + consultationSheet.getParent().getUrl());
  Logger.log('Spreadsheet ID:  ' + consultationSheet.getParent().getId());
  Logger.log('Worksheet 1 (Consultation): ' + consultationSheet.getName() + ' (Rows: ' + consultationSheet.getLastRow() + ')');
  Logger.log('Worksheet 2 (Project Disc): ' + projectSheet.getName() + ' (Rows: ' + projectSheet.getLastRow() + ')');
}

/**
 * Test Utility Function (Run manually from editor to test Gmail notification sending)
 */
function testSendNotification() {
  sendGmailNotification({
    submissionType: 'project_discovery',
    enquiryId: 'RAG-TEST-' + Math.floor(1000 + Math.random() * 9000),
    submittedAt: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss 'IST'"),
    data: {
      name: 'Test Project Client',
      email: 'ragreontechofficial@gmail.com',
      phone: '+91 63833 09954',
      company: 'RagReon Tech QA',
      ideaStage: 'I have a clear project idea.',
      domainsString: 'AI & Machine Learning, Web Development',
      projectTypesString: 'Web Application, AI-Powered Application',
      targetUsers: 'Small business',
      existingResourcesString: 'Requirements document, Prototype',
      budget: '₹15,000–₹50,000',
      timeline: '2–4 weeks',
      projectIdea: 'Test project brief submission.',
      expectedOutcome: 'High performance web app.',
      keyFeatures: 'Real-time dashboard, AI assistant.',
      constraints: 'React, Node, PostgreSQL.',
    },
  });
  Logger.log('Test notification sent successfully to: ' + CONFIG.NOTIFICATION_EMAIL);
}
