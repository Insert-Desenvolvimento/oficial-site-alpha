"use client";
import { FormData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import "./register.scss";

const registerValidateSchema = z.object({
    name: z.string().min(3, { message: "O nome deve ter pelo menos 6 caracteres." }),
    modalitie: z.enum([
        "Luta",
        "Dança",
        "Aeróbico",
        "Musculação",
        "Funcional",
        "3 em 1",
        "Funcional 2 em 1",
        "Dança 2 em 1",
    ]),
    birthdate: z
        .string()
        .refine((value) => !isNaN(Date.parse(value)), { message: "Data de nascimento inválida." }),
    cpf: z.string().min(11, { message: "CPF deve ter pelo menos 11 caracteres." }),
    medicalHistory: z.boolean(),
    healthIssueDescription: z.string().optional(),
    goal: z.string().min(3, { message: "Objetivo deve ter pelo menos 3 caracteres." }),
    email: z.string().email({ message: "Email inválido." }),
});

const Register = () => {
    const [showHealthIssueDescription, setShowHealthIssueDescription] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(registerValidateSchema),
    });

    const sendForm = (data: FormData) => {
        let text = `Olá meu nome é: ${data.name}, Sou nascido em: ${data.birthdate} de CPF: ${data.cpf} e email: ${data.email}. Gostaria de realizar a matrícula no plano: ${data.modalitie} ${data.medicalHistory ? `e gostaria de reportar que, tenho problemas de saúde: ${data.healthIssueDescription}` : "Afirmo também que não tenho histórico de problemas médicos"}. A minha principal meta é: ${data.goal} `;

        const encodedText = encodeURIComponent(`Solicitação de matrícula via site: ${text}`);

        window.open(`https://wa.me/553232761351?text=${encodedText}`, "_blank");
    };

    const watchMedicalHistory = watch("medicalHistory");

    useEffect(() => {
        setShowHealthIssueDescription(!showHealthIssueDescription);
    }, [watchMedicalHistory]);

    return (
        <div className="container-send">
            <div className="content">
                <div className="container-left">
                    <h1>Você está tomando a melhor decisão para sua saúde. Finalize sua inscrição e seja Alpha!</h1>
                </div>
                <div className="container-rigth">
                    <form onSubmit={handleSubmit(sendForm)}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" {...register("name")} placeholder="Nome Completo" />
                            {errors.name && <span className="error-slug">{errors.name.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="modalitie">Em qual plano gostaria de ingressar?</label>
                            <select {...register("modalitie")} id="modalitie">
                                <option value="">Selecione o plano</option>
                                <option value="Luta">Luta</option>
                                <option value="Dança">Dança</option>
                                <option value="Aeróbico">Aeróbico</option>
                                <option value="Musculação">Musculação</option>
                                <option value="Funcional">Funcional</option>
                                <option value="3 em 1">3 em 1</option>
                                <option value="Funcional 2 em 1">Funcional 2 em 1</option>
                                <option value="Dança 2 em 1">Dança 2 em 1</option>
                            </select>
                            {errors.modalitie && <span className="error-slug">{errors.modalitie.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="dataNasc">Data de Nascimento</label>
                            <input type="date" id="dataNasc" {...register("birthdate")} placeholder="Data de Nascimento" />
                            {errors.birthdate && <span className="error-slug">{errors.birthdate.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="cpf">Número do CPF sem traços e ponto</label>
                            <input type="text" id="cpf" {...register("cpf")} placeholder="CPF" />
                            {errors.cpf && <span className="error-slug">{errors.cpf.message}</span>}
                        </div>

                        <div className="form-group">
                            <div className="content-check">
                                <label>
                                    <input
                                        type="checkbox"
                                        {...register("medicalHistory")}
                                        onChange={(e) => setShowHealthIssueDescription(e.target.checked)}
                                    />
                                    Histórico Médico
                                </label>
                            </div>
                            {showHealthIssueDescription && (
                                <textarea
                                    className="description-medical"
                                    {...register("healthIssueDescription")}
                                    placeholder="Descreva o problema de saúde"
                                />
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="goal">Meta a ser Alcançada</label>
                            <input type="text" id="goal" {...register("goal")} placeholder="Objetivo" />
                            {errors.goal && <span className="error-slug">{errors.goal.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Seu melhor E-mail</label>
                            <input type="email" id="email" {...register("email")} placeholder="Email" />
                            {errors.email && <span className="error-slug">{errors.email.message}</span>}
                        </div>

                        <input className="btn-register" type="submit" value="Registrar" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
