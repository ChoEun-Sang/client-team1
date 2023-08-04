import { useState } from "react";
import { Drawer } from "antd";
import EmployeeDutyModalForm from "@components/employee/EmployeeDutyModalForm";
import { styled } from "styled-components";
import Button from "@components/common/Button";

interface Iprops {
  toggle?: boolean;
}

function SelectModal({ toggle }: Iprops) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    height: "50px",
    // overflow: "hidden",
    textAlign: "center",
  };

  return (
    <>
      <Button submit="true" onClick={showDrawer}>
        등록하기
      </Button>
      <StyledDrawer
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
        style={{ color: "aqua" }}
      >
        <EmployeeDutyModalForm toggle={toggle} />
        <EmployeeDutyModalForm toggle={!toggle} />
      </StyledDrawer>
    </>
  );
}

const StyledDrawer = styled(Drawer)`
  margin: 20px 0;
  height: 400px;
  background-color: red;
  color: red;
`;

export default SelectModal;
