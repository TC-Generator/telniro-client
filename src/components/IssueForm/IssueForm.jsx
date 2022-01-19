import { Button, Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const IssueForm = ({
  message = "",
  title = "",
  submitTitle = "ارسال پاسخ",
  TitleEnabled = false,
  onChangeTitle = () => {},
  onChangeMessage = () => {},
  onSendMessage = () => {},
}) => {
  return (
    <Container style={{ marginTop: "0" }}>
      {TitleEnabled ? (
        <Input placeholder="عنوان..." value={title} onChange={onChangeTitle} />
      ) : null}
      <TextArea
        rows={4}
        placeholder="نوشتن..."
        value={message}
        onChange={onChangeMessage}
      />

      <Button
        type="primary"
        onClick={onSendMessage}
        style={{ marginBottom: 30 }}
      >
        {submitTitle}
      </Button>
    </Container>
  );
};

const Container = styled.form`
  textarea,
  input {
    resize: none;
    direction: rtl;
    margin: 12px 0px;
    border: 1px solid #383e46 !important;
    border-radius: 5px;
    padding: 5px 10px;
  }
  .message {
    /* background: #0b0e13; */
    padding: 5px 6px;
    /* border-radius: 15px; */
    margin: 10px 0px;
    /* box-shadow: 3px 7px 15px 1px #06080c; */
  }
`;

export default IssueForm;
