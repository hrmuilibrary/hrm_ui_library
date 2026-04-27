import{j as o}from"./jsx-runtime-DJy9FXZX.js";import{r as b}from"./iframe-nKSTdc3o.js";import{M,a as f}from"./Popover-DLq7t9Vy.js";import{a as x}from"./IconArrowDownloadFilled-m1urdzA3.js";import{S as T}from"./index-DhXHAYKe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-DoXjqEuT.js";import"./types-CH1uZ_mO.js";import"./helpers-h4yF730e.js";import"./IconDismiss-BOpkG80-.js";import"./Tooltip-gEaXXgRZ.js";import"./Text-S9RLM7JN.js";import"./index-DIo5hza_.js";import"./Button-DHUrTz9s.js";import"./Link-BW5d6xQa.js";import"./NestedMenu-Dih7WC0O.js";import"./CollapseGroup-SZF0TgPi.js";import"./Divider-xSPC_oI2.js";import"./AnimatePresenceWrapper-NsoVPxiq.js";import"./IconChevronDown-D5pjSoq1.js";import"./IconChevronUp-il8L1UQ5.js";import"./IconChevronRight-CFAANoQh.js";import"./AvatarGroup-t4J1NV4C.js";import"./DropzoneFileUpload-kOeW_dav.js";import"./Label-CMOAqvk0.js";import"./useFormProps-DOQupwFM.js";import"./ErrorMessage-B4eL7zuG.js";import"./IconDynamicComponent-knAVNmnA.js";import"./Snackbar-Dq4NY-qD.js";import"./Alert-DeHVgyOJ.js";import"./IconDismissFilled-C-F7Sg2T.js";import"./Progress-EnU_ZP6F.js";import"./IconAdd-DX-yKteo.js";import"./Checkbox-DLClgXxF.js";import"./IconInfo-CDb0V_Z7.js";import"./IconCheckmark-wb_dpqM8.js";import"./Empty-gA9rNpN_.js";import"./Image-DFAO8K2i.js";import"./Input-Be5JkXgN.js";import"./IconCheckmarkCircleFilled-Bg776e0B.js";import"./IconChevronLeft-9zSwQNQo.js";import"./IconCaretDownFilled-CBr2ix8K.js";import"./extends-CF3RwP-h.js";import"./Tab-BHPQYCVM.js";import"./Badge-CPxaqAzW.js";import"./IconMore-DY9retx7.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
