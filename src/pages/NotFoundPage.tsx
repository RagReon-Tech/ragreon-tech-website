import React from 'react'
import { AlertCircle, Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <Card padding="lg" className="max-w-md w-full text-center space-y-6 border-slate-200">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-[#0B132B]">404</span>
          <h1 className="text-xl font-bold text-slate-800">Page Not Found</h1>
          <p className="text-sm text-slate-600">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="flex justify-center gap-3 pt-2">
          <Button to="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button to="/contact" variant="outline" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Contact
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default NotFoundPage
