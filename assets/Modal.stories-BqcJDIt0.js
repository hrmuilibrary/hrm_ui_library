import{j as o}from"./Text-D__sJRfZ.js";import{r as b}from"./iframe-C4aqWbSv.js";import"./DropzoneFileUpload-zeHFHiAK.js";import"./UnderConstruction-Dy_905gT.js";import"./types-DgKGVZOG.js";import"./ButtonGroup-DPNhRfYi.js";import{M,a as f}from"./Chips-ClRZkzpD.js";import{b as x}from"./IconInfo-Dg27E1n7.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDoubleRight-BZ4yhFAI.js";import"./IconDismissCircleFilled-Cj6hEDzZ.js";import"./index-BWyb6v_r.js";const D={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},C=r=>{const[i,e]=b.useState(!1),n=()=>e(!1),l=()=>e(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...r,onClose:n,isOpen:i,onSubmit:()=>{n(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:"Modal content"})})]})},t=C.bind({});t.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const T=r=>{const[i,e]=b.useState(!1),n=()=>e(!1),l=()=>e(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...r,iconProps:{Component:x},onClose:n,isOpen:i,onSubmit:()=>{n(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},s=T.bind({});s.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,c,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const z=["Modal","ModalConfirmation"];export{t as Modal,s as ModalConfirmation,z as __namedExportsOrder,D as default};
