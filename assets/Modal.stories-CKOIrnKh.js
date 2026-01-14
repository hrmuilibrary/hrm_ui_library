import{j as o}from"./jsx-runtime-uGtigUhx.js";import{r as b}from"./iframe-CCpZ0RzU.js";import"./DropzoneFileUpload-B6UIcAcl.js";import"./UnderConstruction-A_PNalYn.js";import"./types-DQfykHh9.js";import"./ButtonGroup-CujBHiIl.js";import{M,a as f}from"./Chips-DjPG7KFe.js";import"./Text-CGJlnosw.js";import"./IconYoutube-oOrWhdz0.js";import{b as x}from"./IconInfo-DaPyXjYs.js";import"./IconPerson-N3kFoPbx.js";import"./IconUnitsEmployee-CIp6I4TM.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDynamicComponent-DqSFy7yo.js";import"./index-31GdvHSE.js";import"./index-DZFHmqbk.js";const $={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},C=r=>{const[i,e]=b.useState(!1),t=()=>e(!1),l=()=>e(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...r,onClose:t,isOpen:i,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:"Modal content"})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const T=r=>{const[i,e]=b.useState(!1),t=()=>e(!1),l=()=>e(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...r,iconProps:{Component:x},onClose:t,isOpen:i,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},s=T.bind({});s.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,c,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
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
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const B=["Modal","ModalConfirmation"];export{n as Modal,s as ModalConfirmation,B as __namedExportsOrder,$ as default};
