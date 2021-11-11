import { Input, Modal } from "antd";
import { useState } from "react";
export const DialogBox = (props: {
  isModalVisible: any;
  onSubmit: (e: any) => any;
  onClose: () => void;
  setProjectName: (e: any) => any;
}) => {
  const { isModalVisible, onSubmit, onClose, setProjectName } = props;
  return (
    <Modal
      title="Create new project"
      visible={isModalVisible}
      onOk={onSubmit}
      onCancel={onClose}
    >
      <div>
        <Input onChange={(e) => setProjectName(e.target.value)} />
      </div>
    </Modal>
  );
};
