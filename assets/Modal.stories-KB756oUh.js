import{j as o}from"./jsx-runtime-jyUgkTw7.js";import{r as b}from"./iframe-BdEtFhyL.js";import{M,a as f}from"./Popover-3q1vxCz9.js";import{a as x}from"./IconArrowDownloadFilled-B_jTPRlp.js";import{S as T}from"./index-C-ZlEtmz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-Bh5VEtIv.js";import"./types-B10J7gf9.js";import"./helpers-BrcKB9Vj.js";import"./IconDismiss-BfJIZhJ3.js";import"./Tooltip-Cfj99ue9.js";import"./Text-BIsmiTeW.js";import"./Button-DNFyd_v_.js";import"./Link-DCM8Pc9p.js";import"./NestedMenu-gYJfc0Rz.js";import"./index-DF4iYCah.js";import"./CollapseGroup-BomVDcHT.js";import"./Divider-BOMctxNo.js";import"./AnimatePresenceWrapper-B3VgkAZ4.js";import"./IconChevronDown--ZxKMSA0.js";import"./IconChevronUp-DN3jO606.js";import"./IconChevronRight-Cgcf34y8.js";import"./AvatarGroup-OAUV1-_I.js";import"./DropzoneFileUpload-BKvz-XgW.js";import"./Label-5T9rOiZS.js";import"./useFormProps-z-47XSOv.js";import"./ErrorMessage-D6LSUSv1.js";import"./IconDynamicComponent-DnCVpLmA.js";import"./Snackbar-ys2e2s6d.js";import"./Alert-lvzUJFIr.js";import"./IconDismissFilled-fQWXj-Th.js";import"./Progress-C1r4cIIV.js";import"./IconAdd-DUiaXDDX.js";import"./Checkbox-u_igeAYF.js";import"./IconInfo-O0DrFVue.js";import"./IconCheckmark-Drn5aRNL.js";import"./Empty-CYv7faC0.js";import"./Image-Dm3Rhr9T.js";import"./Input-BR5eIz6x.js";import"./IconCheckmarkCircleFilled-CLSGLaOW.js";import"./IconChevronLeft-BsoFTcJN.js";import"./IconCaretDownFilled-D8DOL98x.js";import"./extends-CF3RwP-h.js";import"./Tab-B5PTuCyk.js";import"./Badge-z7ujQpR_.js";import"./IconMore-I_aC-eji.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
