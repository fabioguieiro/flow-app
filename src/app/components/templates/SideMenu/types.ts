export interface SideMenuProps {
    handleCreateNewNode: (
        nodeType: 'diamondNode' | 'successNode' | 'unsuccessNode',
        label: string
    ) => void
    title: string
}
