
interface LogoutProps {
  showLogoutMenu: boolean;
  setShowLogoutMenu: (show: boolean) => void;
  logoutMenuRef: React.RefObject<HTMLDivElement>;
  handleLogout: () => void;
}

const Logout: React.FC<LogoutProps> = ({showLogoutMenu,setShowLogoutMenu,logoutMenuRef,handleLogout}) => {
    

  return (
    <>
      <div
              className="relative"
              onClick={() => setShowLogoutMenu(!showLogoutMenu)}
            >
              <span className="ml-4 cursor-pointer">Logout</span>
              {showLogoutMenu && (
                <div
                  ref={logoutMenuRef}
                  className="absolute top-10 right-0 mt-2 w-40 bg-white text-black border rounded-lg shadow-lg"
                >
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Confirm Logout
                  </button>
                  <button
                    onClick={() => setShowLogoutMenu(false)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
    </>
  );
};

export default Logout;
