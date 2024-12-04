import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
  width: 1200px;
  height: 650px;
  margin: auto;
  background-color: #e5e5e5;
  padding: 20px;
  box-shadow: 1px 1px 30px #3339;
  border-radius: 8px;
  gap: 20px;
  position: relative;

  & > div:last-of-type {
    grid-column: span 2;
    justify-self: end;
  }

`;

const FormSection = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 0px;
  padding-left: 20px;
  padding-top: 10px;
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin-bottom: 15px;
  width: 90%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
`;

const Input = styled.input`
  width: 85%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 85%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

const RadioButton = styled.label`
  display: inline-block;
  margin-right: 15px;
`;

const DayButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const DayButton = styled.button`
  flex: 1;
  margin: 0 5px;
  padding: 10px;
  background-color: ${(props) => (props.selected ? '#89CFF0' : '#f0f0f0')};
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ScheduleSection = styled.div`
  flex: 1;
  padding-right: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-righ: 20px;
`;

const ParrafoObli = styled.p`
  color: red;
  font-size: 15px;
  margin: 0;
  position: absolute;
  left: 20px;
`;

const Botones = styled.div`
  display: flex;
  gap: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const DivPeriodica = styled.div`
  margin-top: 30px;
  width: 91%;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ModalButton = styled(Button)`
  padding: 8px 12px;
  font-size: 14px;
`;

export {
  Container,
  FormSection,
  FormGroup,
  Label,
  Input,
  Select,
  ScheduleSection,
  RadioGroup,
  RadioButton,
  DayButtons,
  DayButton,
  Modal,
  ModalOverlay,
  Button,
  ParrafoObli,
  Botones,
  Footer,
  DivPeriodica,
  ModalButton,
  ModalButtons
};