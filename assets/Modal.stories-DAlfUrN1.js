import{j as o}from"./jsx-runtime-CeNp5TY1.js";import{r as b}from"./iframe-gUduO0er.js";import{M,a as f}from"./Popover-Bz7foySY.js";import{a as x}from"./IconArrowDownloadFilled-BN5_JFIE.js";import{S as T}from"./index-oRx8Naum.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-D2hcE3N_.js";import"./types-DG_PiXwV.js";import"./helpers-B4IiAyNm.js";import"./IconDismiss-E_YJxBtr.js";import"./Tooltip-Dz4ooSy2.js";import"./Text-C3jrfAPs.js";import"./Button-CGEhWhn9.js";import"./Link-D0vRcW-Y.js";import"./NestedMenu-BF2_o6uF.js";import"./index-0pnkKbZs.js";import"./CollapseGroup-BWTWf35c.js";import"./Divider-CBGl0GjH.js";import"./AnimatePresenceWrapper-B6iOufUc.js";import"./IconChevronDown-CJUuZGOT.js";import"./IconChevronUp-TgF-WCMc.js";import"./IconChevronRight-Morxs7XH.js";import"./AvatarGroup-B8iaUke3.js";import"./DropzoneFileUpload-EceAIRnc.js";import"./Label-CTNGmzKo.js";import"./useFormProps-B537u9vN.js";import"./ErrorMessage-B8XN-XZm.js";import"./IconDynamicComponent-BtpQW8Cn.js";import"./Snackbar-CFk3Lr_S.js";import"./Alert-BgNs7TFY.js";import"./IconDismissFilled-CQELEHAA.js";import"./Progress-BVtvyn0d.js";import"./IconAdd-BjzYHF57.js";import"./Checkbox-DD6JuhAJ.js";import"./IconInfo-EpsgUDiA.js";import"./IconCheckmark-N0fonzF9.js";import"./Empty-D4QY3fYd.js";import"./Image-DbQ6DE5L.js";import"./Input-OyKqn1Qw.js";import"./IconCheckmarkCircleFilled-BaFxIw5m.js";import"./IconChevronLeft-DaneD1Y6.js";import"./IconCaretDownFilled-Dv9MZKaC.js";import"./extends-CF3RwP-h.js";import"./Tab-Q1tfxpdf.js";import"./Badge-Btvp76eM.js";import"./IconMore-CzviZh0O.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
