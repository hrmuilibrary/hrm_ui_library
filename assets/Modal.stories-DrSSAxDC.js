import{j as o}from"./jsx-runtime-w4ZoJjJB.js";import{r as b}from"./iframe-Brhiys7H.js";import{M,a as f}from"./Popover-C2VXRQoS.js";import{a as x}from"./IconArrowDownloadFilled-KCWphuvR.js";import{S as T}from"./index-DB-ShWhj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BHva8P6J.js";import"./types-C2YxilUn.js";import"./helpers-6hKBOWAM.js";import"./IconDismiss-JInBKOeh.js";import"./Tooltip-TMM9ywqe.js";import"./Text-BFdjbe0o.js";import"./index-MapRQVER.js";import"./Button-dH5m6yxL.js";import"./Link-245uU_Hk.js";import"./NestedMenu-DoVh2YUD.js";import"./CollapseGroup-DA3sBl9L.js";import"./Divider-CmVHKk0i.js";import"./AnimatePresenceWrapper-BiBRlO8m.js";import"./IconChevronDown-CuDsnbJR.js";import"./IconChevronUp-DrgnvcCf.js";import"./IconChevronRight-CaMFMtaD.js";import"./AvatarGroup-Bavm6Rlc.js";import"./DropzoneFileUpload-BB_2xjWc.js";import"./Label-Bt9e2zVt.js";import"./useFormProps-B-Bh-vFc.js";import"./ErrorMessage-RAOXIDcE.js";import"./IconDynamicComponent-CcAERxV8.js";import"./Snackbar-vslCUJBz.js";import"./Alert-D25MO-uR.js";import"./IconDismissFilled-CGP-Dh7o.js";import"./Progress-0depdzsF.js";import"./IconAdd-BrGoR-WU.js";import"./Checkbox-BRtVcbvu.js";import"./IconInfo-BVFj0dFf.js";import"./IconCheckmark-DGr1bTdF.js";import"./Empty-B4vhONDD.js";import"./Image-XsVy4GAf.js";import"./Input-_ZqpOG0S.js";import"./IconCheckmarkCircleFilled-1__A4WEQ.js";import"./IconChevronLeft-BZLYG0K2.js";import"./IconCaretDownFilled-YsEqgi86.js";import"./extends-CF3RwP-h.js";import"./Tab-B_Q5WgSG.js";import"./Badge-C3CX_YXR.js";import"./IconMore-XpHBQEpV.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
