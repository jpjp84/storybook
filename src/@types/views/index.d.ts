declare module "view" {

  import { ReactChild } from "react"

  export interface BaseViewProps {
    className?: string
    children?: ReactChild
  }
}
