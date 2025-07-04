import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", {
      replace: true,
      state: { scrollToForm: true },
    });
  }, [navigate]);

  return null;
};

export default Contact;
