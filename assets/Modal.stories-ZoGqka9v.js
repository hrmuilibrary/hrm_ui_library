import{j as o}from"./jsx-runtime-CO_4fShW.js";import{r as b}from"./iframe-DQqQBVxO.js";import{M,a as f}from"./ModalConfirmation-BYxEjt5v.js";import{I as x}from"./IconDelete-DAQsBGEt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjDT6sgC.js";import"./AnimatePresenceWrapper-D5w8xp_Y.js";import"./types-DyQXMykX.js";import"./helpers-uRsMBXJT.js";import"./IconDismiss-BU3cpEAw.js";import"./Tooltip-Cp0tUxh0.js";import"./Text-CkXkE3Bq.js";import"./index-DYDl_GcV.js";import"./Button-CBwOmmgy.js";const E={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},C=i=>{const[r,e]=b.useState(!1),t=()=>e(!1),l=()=>e(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...i,titleSize:"medium",onClose:t,isOpen:r,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:"Modal content"})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const T=i=>{const[r,e]=b.useState(!1),t=()=>e(!1),l=()=>e(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...i,iconProps:{Component:x},onClose:t,isOpen:r,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},s=T.bind({});s.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,c,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const w=["Modal","ModalConfirmation"];export{n as Modal,s as ModalConfirmation,w as __namedExportsOrder,E as default};
