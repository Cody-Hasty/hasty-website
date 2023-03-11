import { TreeItemProps } from '@mui/lab/TreeItem'
import { SvgIconProps } from '@mui/material/SvgIcon'

export type EmailTreeItemProps = TreeItemProps & {
  bgColor?: string
  color?: string
  labelIcon: React.ElementType<SvgIconProps>
  labelInfo?: string
  labelText: string
}

export interface EmailTreePropType {
  changeFolder: (folder: string) => void
  unread: number
}