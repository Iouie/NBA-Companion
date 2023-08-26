// Layout for for signup and signin page

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-full">{children}</div>
  );
};

export default AuthLayout;
