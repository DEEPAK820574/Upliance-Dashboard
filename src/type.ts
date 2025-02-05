export interface UserData {
    id: string
    name: string
    email: string
    address: string
    phone: string
  }
  
  export interface UnsavedChangesState {
    hasUnsavedChanges: boolean
    originalData: UserData | null
    currentData: UserData | null
  }
  
  export interface NavigationProps {
    setCurrentPage: (page: string) => void;
  }
  
  export interface UserTrendsData {
    name: string;
    users: number;
    activeUsers: number;
  }