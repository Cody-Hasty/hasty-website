import * as React from "react";
import TreeView from '@material-ui/lab/TreeView';
import { StyledTreeItem } from './config/treeFunctions';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FolderIcon from '@material-ui/icons/Folder';
import StarIcon from '@material-ui/icons/Star';
import DescriptionIcon from '@material-ui/icons/Description';
import SendIcon from '@material-ui/icons/Send';
import withStyleHook from './config/treeStyles';
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

interface EmailTreePropType {
    changeFolder: (folder: string) => void;
    unread: number;
    classes: ClassNameMap<string>;
}

class EmailTree extends React.Component<EmailTreePropType, {}> {
    render() {
        const classes = this.props.classes;
        const unread = this.props.unread;
        return (
            <div className="email-tree">
                <TreeView
                    className={classes.root}
                    defaultSelected="1"
                    defaultExpanded={['3']}
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    defaultEndIcon={<div style={{ width: 24 }} />}
                    >
                        
                        <StyledTreeItem nodeId="1" labelText="Inbox" 
                          labelIcon={MailIcon} labelInfo={
                              unread === 0 ? "" : unread.toString()
                            } 
                          onClick={() => this.props.changeFolder("inbox")}/>
                        <StyledTreeItem nodeId="2" labelText="Trash" 
                          labelIcon={DeleteIcon}  
                          onClick={() => this.props.changeFolder("trash")}/>
                        <StyledTreeItem nodeId="3" labelText="[Gmail]" labelIcon={LabelIcon}>
                            <StyledTreeItem
                                nodeId="5"
                                labelText="Starred"
                                labelIcon={StarIcon}
                                onClick={() => this.props.changeFolder("starred")}
                            />
                            <StyledTreeItem
                                nodeId="6"
                                labelText="Drafts"
                                labelIcon={DescriptionIcon}
                                onClick={() => this.props.changeFolder("drafts")}
                            />
                            <StyledTreeItem
                                nodeId="7"
                                labelText="Sent Mail"
                                labelIcon={SendIcon}
                                onClick={() => this.props.changeFolder("sent")}
                            />
                            <StyledTreeItem
                                nodeId="8"
                                labelText="Spam"
                                labelIcon={WhatshotIcon}
                                onClick={() => this.props.changeFolder("spam")}
                            />
                        </StyledTreeItem>
                        <StyledTreeItem nodeId="4" labelText="Saved" 
                          labelIcon={FolderIcon} 
                          onClick={() => this.props.changeFolder("saved")} />
                </TreeView>
            </div>
        )
    }
}
type NonWrappedProps = Omit<EmailTreePropType, "classes">;
export default withStyleHook<NonWrappedProps>(EmailTree);