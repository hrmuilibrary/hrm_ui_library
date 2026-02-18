import{j as e}from"./jsx-runtime-BoRs7bpF.js";import{r as b}from"./iframe-DcP3ocjm.js";import{M,a as f}from"./ModalConfirmation-z0MUcuKe.js";import{I as x}from"./IconDelete-AUs3t75i.js";import"./preload-helper-Dp1pzeXC.js";import"./index-IaqrroEN.js";import"./types-DeDHadih.js";import"./helpers-r_FRjBGO.js";import"./IconDismiss-BXVZllgV.js";import"./Tooltip-DXQclReM.js";import"./Text-BTL3aUEW.js";import"./index-DYDl_GcV.js";import"./Button-MCqteBOR.js";const D={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},C=i=>{const[l,o]=b.useState(!1),t=()=>o(!1),r=()=>o(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:r,children:"click here "}),e.jsx(M,{...i,titleSize:"medium",onClose:t,isOpen:l,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:"Modal content"})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const T=i=>{const[l,o]=b.useState(!1),t=()=>o(!1),r=()=>o(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:r,children:"click here "}),e.jsx(f,{...i,iconProps:{Component:x},onClose:t,isOpen:l,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},s=T.bind({});s.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,c,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>Modal content</div>
      </_Modal>
    </div>;
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const E=["Modal","ModalConfirmation"];export{n as Modal,s as ModalConfirmation,E as __namedExportsOrder,D as default};
