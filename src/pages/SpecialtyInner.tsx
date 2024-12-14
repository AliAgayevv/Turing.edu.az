import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";

const SpecialtyInner = () => {
  const { id } = useParams(); // Correctly calling useParams()
  console.log(id);

  return (
    <div>
      <Navbar isDark={true} />
      <div className="w-11/12 mx-auto">
        <FAQ category={id} />
      </div>
    </div>
  );
};

export default SpecialtyInner;
