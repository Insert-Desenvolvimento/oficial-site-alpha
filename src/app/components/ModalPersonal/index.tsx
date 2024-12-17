import React, { useRef } from "react";
import { Personal } from "@/types";
import "./modalPersonal.scss";

const ModalPersonal = ({
  item,
  onClose,
}: {
  item: Partial<Personal>;
  onClose: () => void;
}) => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const healthIssueRef = useRef<HTMLInputElement>(null);
  const objectiveRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = fullNameRef.current?.value || "";
    const age = ageRef.current?.value || "";
    const healthIssue = healthIssueRef.current?.value || "";
    const objective = objectiveRef.current?.value || "";

    const message = `Olá, Gostei do perfil profissional no site da Academia e gostaria de mais detalhes.\n\nNome: ${fullName}\nIdade: ${age}\nProblema de Saúde: ${healthIssue}\nObjetivos: ${objective}`;
    const whatsappLink = `https://wa.me/${
      item.contactNumber
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");

    fullNameRef.current!.value = "";
    ageRef.current!.value = "";
    healthIssueRef.current!.value = "";
    objectiveRef.current!.value = "";
  };

  return (
    <>
      <div className="modalOverlay" onClick={onClose}></div>
      <div className="containerPersonal">
        <div className="modal">
          <div className="header">
            <p></p>
            <span onClick={onClose}>X</span>
          </div>
          <div className="modalBodyElements">
            <div className="textElementsPersonal">
              <h2 className="namePersonal">{item.name}</h2>
              <p className="descriptionPersonal">{item.description}</p>
              <p className="hobbiePersonal">{item.hobby}</p>
            </div>
            <div className="contact">
              <h2>Fale com o Profissional</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  ref={fullNameRef}
                />
                <input type="text" placeholder="Idade" ref={ageRef} />
                <input
                  type="text"
                  placeholder="Tem problema de saúde ? Se sim, qual ?"
                  ref={healthIssueRef}
                />
                <textarea
                  placeholder="Fale um pouco sobre seus objetivos"
                  ref={objectiveRef}
                />
                <div className="btnWhatsPersonal">
                <button type="submit"> ENTRE EM CONTATO</button>
              </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPersonal;
