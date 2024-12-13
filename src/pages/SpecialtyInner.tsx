import { useParams } from "react-router-dom";

const SpecialtyInner = () => {
  const { id } = useParams(); // URL parametresini alıyoruz

  return (
    <div>
      <h1>Specialty: {id}</h1> {/* id parametresine göre içerik gösteriyoruz */}
      {/* Burada içerik gösterilebilir */}
    </div>
  );
};

export default SpecialtyInner;
