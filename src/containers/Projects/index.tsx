import { Button, Layout, Typography } from "antd";
import React from "react";
import { useEffect, useState } from "react";
import { DialogBox } from "../../components/DialogBox";
import { Table } from "antd";
import { column } from "./common";
const { Text } = Typography;
const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectlist, setProjectList] = useState([]);
  const createProjectList = () => {
    setIsVisible(false);
    let list = { name: projectName };
  };
  return (
    <>
      <Layout className="page-container">
        <div className="page-subheader">
          <div>
            <Text>Projects</Text>
          </div>
          <div>
            <Button onClick={() => setIsVisible(true)}>
              CREATE NEW PROJECT
            </Button>
          </div>
        </div>
      </Layout>
      <Layout>
        <Table columns={column} dataSource={projectlist} />
      </Layout>
      <DialogBox
        isModalVisible={isVisible}
        onSubmit={() => createProjectList()}
        onClose={() => setIsVisible(false)}
        setProjectName={(value: any) => setProjectName(value)}
      />
    </>
  );
};

export default Project;
