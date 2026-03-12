import{j as o}from"./jsx-runtime-M9SCQKd1.js";import{r as b}from"./iframe-DxQ_GNvi.js";import{M,a as f}from"./Popover-CxZgal92.js";import{a as x}from"./IconArrowDownloadFilled-Dex-Q3Wu.js";import{S as T}from"./index-B-k492Ai.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-BCyEUiR_.js";import"./types-CChFf3K-.js";import"./helpers-BOhIF9Bp.js";import"./IconDismiss-Gl927t0h.js";import"./Tooltip-DorJPNsM.js";import"./Text-N65zDgGZ.js";import"./Button-B8GbDSGJ.js";import"./Link-CaMJQT5f.js";import"./NestedMenu-DZm6EzZ2.js";import"./index-XtymV3RJ.js";import"./CollapseGroup-fRwGIP83.js";import"./Divider-DmqR1Ouc.js";import"./AnimatePresenceWrapper-rw2bAKfE.js";import"./IconChevronDown-B98fF1pB.js";import"./IconChevronUp-CHgjJTd8.js";import"./IconChevronRight-DlUNSAh2.js";import"./AvatarGroup-C0WnZz4t.js";import"./DropzoneFileUpload-DB-WWyYZ.js";import"./Label-bh3Y9-zx.js";import"./useFormProps-acl2opNp.js";import"./ErrorMessage-5Yc8nroX.js";import"./IconDynamicComponent-C3Z7Ne9Z.js";import"./Snackbar-SziTCRqL.js";import"./Alert-DLa4jPrE.js";import"./IconDismissFilled-YaqITttM.js";import"./Progress-DPPZp3sS.js";import"./IconAdd-DpwtC_5X.js";import"./Checkbox-raq-EPO5.js";import"./IconInfo-91AnncH-.js";import"./IconCheckmark-D46hWG-4.js";import"./Empty-_HS5oHwh.js";import"./Image-C1mhQN3p.js";import"./Input-BJFucgUp.js";import"./IconCheckmarkCircleFilled-lGUmRfN4.js";import"./IconChevronLeft-CvTTpqU1.js";import"./IconCaretDownFilled-6VqeOCCx.js";import"./extends-CF3RwP-h.js";import"./Tab-qkvWQIOf.js";import"./Badge-BzDLdpMn.js";import"./IconMore-CiA8_9I7.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
