type TabBarName = 'index' | 'two'
type TabBarIcon = 'home' | 'bookshelf'

export interface TabBar {
    name: TabBarName,
    title: string,
    icon: TabBarIcon
}