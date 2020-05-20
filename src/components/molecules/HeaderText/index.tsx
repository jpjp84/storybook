import React from "react"

import Text, { TextProps } from "../../atoms/Text"

import "./headerText.scss"

const HeaderText: React.FC<TextProps> = ({ text = "", children, className }) => (
  <Text className={`title ${className}`}>
    {text || children}
  </Text>
)

export default HeaderText
