import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { tags } from "../../../helpers/tags";

const ResourceModal = ({ show, handleClose, actionType }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    actionType(data);
    reset();
    handleClose();
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>New Resource</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PRForm onSubmit={handleSubmit(onSubmit)}>
          <PRFormItems>
            <label>Title: </label>
            <input {...register("name")} />
            <label>Description: </label>
            <input {...register("description")} />
            <label>Link: </label>
            <input {...register("link")} />
            <label>Type: </label>
            <select multiple {...register("tags")}>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <label>Level: </label>
            <select multiple {...register("level")}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <label>Technologies: </label>

            <select multiple {...register("technologies")}>
              <option value="react">React</option>
              <option value="mongodb">MongoDB</option>
              <option value="vuejs">Vue</option>
            </select>
          </PRFormItems>
          <PRButton type="submit" />
        </PRForm>
      </Modal.Body>
    </Modal>
  );
};

const PRForm = styled.form`
  display: grid;
  grid-gap: 1rem;
`;
const PRFormItems = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 5fr;
`;

const PRButton = styled.input`
  justify-self: center;
  align-self: center;
  padding: 0.5em 2em;
`;

export default ResourceModal;
