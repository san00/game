import React from "react";
interface FooterProps {
    setShowRules: (showRules?: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ setShowRules }: FooterProps) => {
    const setRulesOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        setShowRules(true);
    };
    return (
        <section>
            <button onClick={setRulesOnClick}>Rules</button>
        </section>
    );
};

export default Footer;
