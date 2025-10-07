const Header = () => {
  return (
    <div className="bg-white h-16 flex items-center">
      <img src="Logo.png" alt="logo" className="size-14 ml-4" />
      <div className="flex flex-col items-end h-full ml-2">
        <p className="font-bold text-custom-primary leading-3 mt-6">
          SPOT BUY CENTER
        </p>
        <p className="text-xs text-custom-secondary font-semibold">
          ADMIN PORTAL
        </p>
      </div>
    </div>
  );
};

export default Header;
