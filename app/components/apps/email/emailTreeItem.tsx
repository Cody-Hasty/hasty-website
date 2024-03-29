import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem'
import { styled } from '@mui/material/styles'
import { EmailTreeItemProps } from '@/types/treeTypes'

export const EmailTreeItem = React.forwardRef(
  function EmailTreeItem(
    props: EmailTreeItemProps,
    ref: React.Ref<HTMLLIElement>
    ) {
    const {
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelInfo,
      labelText,
      ...other
    } = props

    const EmailTreeItemRoot = styled(TreeItem)(({ theme }) => ({
      color: theme.palette.text.secondary,
      [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
          fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
          backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
          color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
          fontWeight: 'inherit',
          '& .MuiSvgIcon-root': {
            color: 'white',
          },
          '& .MuiTypography-root': {
            color: 'white',
          },
        },
      },
      [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
          paddingLeft: theme.spacing(2),
        },
      },
    })) as unknown as typeof TreeItem;

    return (
      <EmailTreeItemRoot
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        }
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        ref={ref}
        {...other}
      />
    )
  }
)