import React from 'react'
import TreeView from '@mui/lab/TreeView'
import MailIcon from '@mui/icons-material/Mail'
import DeleteIcon from '@mui/icons-material/Delete'
import LabelIcon from '@mui/icons-material/Label'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import FolderIcon from '@mui/icons-material/Folder'
import StarIcon from '@mui/icons-material/Star'
import DescriptionIcon from '@mui/icons-material/Description'
import SendIcon from '@mui/icons-material/Send'
import EmailTreeItem from './emailTreeItem'
import { EmailTreePropType } from '../../../types/treeTypes'

declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string
    '--tree-view-bg-color'?: string
  }
}

export default function EmailTree(props: EmailTreePropType) {
  const unread = props.unread
  return (
    <div className="email-tree">
      <TreeView
        defaultSelected="1"
        defaultExpanded={['3']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 250 }}
      >
        <EmailTreeItem nodeId="1" labelText="Inbox" 
          labelIcon={MailIcon} labelInfo={
            unread === 0 ? "" : unread.toString()
          } 
          onClick={() => props.changeFolder("inbox")}/>
        <EmailTreeItem nodeId="2" labelText="Trash" 
          labelIcon={DeleteIcon}  
          onClick={() => props.changeFolder("trash")}/>
        <EmailTreeItem nodeId="3" labelText="[Gmail]" labelIcon={LabelIcon}>
          <EmailTreeItem
            nodeId="5"
            labelText="Starred"
            labelIcon={StarIcon}
            onClick={() => props.changeFolder("starred")}
          />
          <EmailTreeItem
            nodeId="6"
            labelText="Drafts"
            labelIcon={DescriptionIcon}
            onClick={() => props.changeFolder("drafts")}
          />
          <EmailTreeItem
            nodeId="7"
            labelText="Sent Mail"
            labelIcon={SendIcon}
            onClick={() => props.changeFolder("sent")}
          />
          <EmailTreeItem
            nodeId="8"
            labelText="Spam"
            labelIcon={WhatshotIcon}
            onClick={() => props.changeFolder("spam")}
          />
        </EmailTreeItem>
        <EmailTreeItem nodeId="4" labelText="Saved" 
          labelIcon={FolderIcon} 
          onClick={() => props.changeFolder("saved")} />
      </TreeView>
    </div>
  )
}
