import React from "react";
import { Navigate } from "react-router-dom"; // استخدام Navigate بدلاً من Redirect
import { useAuth } from "../../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // إذا لم يكن المستخدم مسجلًا، يتم إعادة توجيهه إلى صفحة الدخول باستخدام Navigate
    return <Navigate to="/login" />;
  }

  return children; // إذا كان المستخدم مسجلًا، يسمح بالوصول للمحتوى
};

export default PrivateRoute;
