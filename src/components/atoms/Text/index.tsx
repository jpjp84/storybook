import React from "react"
import { BaseViewProps } from "view"

export interface TextProps extends BaseViewProps {
  text?: string
}

const Text: React.FC<TextProps> = ({ text, children, className }) => {
  return (
    <div className={className}>
      {text || children}
    </div>
  )
}
export default Text
