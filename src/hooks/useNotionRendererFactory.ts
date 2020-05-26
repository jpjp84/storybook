import { NotionPage } from "notion"
import { useMemo } from "react"
import notionRendererFactory from "gatsby-source-notionso/lib/renderer"

export default (data: NotionPage) => (
  useMemo(() => {
    return notionRendererFactory({
      notionPage: data.notionPageBlog
    })
  }, [data])
)
