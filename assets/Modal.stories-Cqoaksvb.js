import{j as o}from"./jsx-runtime-pDd-v4ZD.js";import{r as b}from"./iframe-2FnXxmlw.js";import{M,a as f}from"./Popover-gkcKSzMq.js";import{a as x}from"./IconArrowDownloadFilled-QtSzW8zi.js";import{S as T}from"./index-PPJtuIMZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-CufBVRh4.js";import"./types-ClOKwcvp.js";import"./helpers-BFS1MnzK.js";import"./IconDismiss-DXwPvCgD.js";import"./Tooltip-DyysFQ0J.js";import"./Text-ClEGDka6.js";import"./index-CUAXAE9B.js";import"./Button-CGescgA9.js";import"./Link-DDNBmxIP.js";import"./NestedMenu-CgV-Ellx.js";import"./CollapseGroup-BqHmjBzQ.js";import"./Divider-CNiUs4fO.js";import"./AnimatePresenceWrapper-DYtUr4Ez.js";import"./IconChevronDown-D1dbowgK.js";import"./IconChevronUp-DZzwt38g.js";import"./IconChevronRight-Bw4WvJcK.js";import"./AvatarGroup-Cn1ZImnV.js";import"./DropzoneFileUpload-DfuygU_q.js";import"./Label-BpioSxO9.js";import"./useFormProps-B0Jor4br.js";import"./ErrorMessage-CA-k-3A8.js";import"./IconDynamicComponent-Bek1Lrvo.js";import"./Snackbar-BLa4LgQT.js";import"./Alert-CravuQ7f.js";import"./IconDismissFilled-DHG6pgD2.js";import"./Progress-BZDm0yK3.js";import"./IconAdd-_2-fGo_d.js";import"./Checkbox-RcRIGnhx.js";import"./IconInfo-Cr3Q0Mpa.js";import"./IconCheckmark-CodSIfym.js";import"./Empty-CRchsvli.js";import"./Image-XPY6hMOD.js";import"./Input-BMvrqjML.js";import"./IconCheckmarkCircleFilled-Bqx0mdex.js";import"./IconChevronLeft-Day1AKYT.js";import"./IconCaretDownFilled-Brkw12mS.js";import"./extends-CF3RwP-h.js";import"./Tab-CsxKcsEm.js";import"./Badge-CjWQ4wJi.js";import"./IconMore-B_zJLxhz.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const xo=["Modal","ModalConfirmation"];export{n as Modal,i as ModalConfirmation,xo as __namedExportsOrder,fo as default};
