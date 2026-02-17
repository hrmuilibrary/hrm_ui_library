import{j as o}from"./jsx-runtime-CxhKFHZr.js";import{r as b}from"./iframe-VzCerQux.js";import{M,a as f}from"./ModalConfirmation-DppWte2w.js";import{I as x}from"./IconDelete--65dPnu8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-cSRylV67.js";import"./AnimatePresenceWrapper-C4hZY9Y9.js";import"./types-C5DXKe7z.js";import"./helpers-Boudrv2M.js";import"./IconDismiss-Cmt9EbFe.js";import"./Tooltip-FQ2Ypypw.js";import"./Text-D7dqKhdH.js";import"./index-DYDl_GcV.js";import"./Button-CTLExGhq.js";const E={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},C=i=>{const[r,e]=b.useState(!1),t=()=>e(!1),l=()=>e(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...i,titleSize:"medium",onClose:t,isOpen:r,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:"Modal content"})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const T=i=>{const[r,e]=b.useState(!1),t=()=>e(!1),l=()=>e(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...i,iconProps:{Component:x},onClose:t,isOpen:r,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},s=T.bind({});s.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,c,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
