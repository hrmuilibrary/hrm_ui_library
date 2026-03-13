import{j as o}from"./jsx-runtime-Deq49PtD.js";import{r as b}from"./iframe-VY33bBZC.js";import{M,a as f}from"./Popover-DOZOXEcl.js";import{a as x}from"./IconArrowDownloadFilled-JapEMW14.js";import{S as T}from"./index-DuLfUR-n.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-C0x--rAf.js";import"./types-CxPK9San.js";import"./helpers-CBoNSfUf.js";import"./IconDismiss-CJgyTioh.js";import"./Tooltip-H4K3uVVd.js";import"./Text-CEs2hxxX.js";import"./Button-Ce8-J-1s.js";import"./Link-Bvase3iq.js";import"./NestedMenu-DPoOGBq9.js";import"./index-yOqzteEH.js";import"./CollapseGroup-oN6F9EQH.js";import"./Divider-0pIWeRJk.js";import"./AnimatePresenceWrapper-D2Ro9jOX.js";import"./IconChevronDown-BhUQLS_H.js";import"./IconChevronUp-ke31beQh.js";import"./IconChevronRight-1EY_2xGF.js";import"./AvatarGroup-7UCRlvWb.js";import"./DropzoneFileUpload-2icaLsI1.js";import"./Label-Cd3q7H6-.js";import"./useFormProps-DFQrYC3J.js";import"./ErrorMessage-ON8HmtLS.js";import"./IconDynamicComponent-Dylt8NvR.js";import"./Snackbar-CJjWhtlK.js";import"./Alert-zK4Nxk-o.js";import"./IconDismissFilled-DJVIflv9.js";import"./Progress-YexrY_8_.js";import"./IconAdd-F_UuAG9R.js";import"./Checkbox-XQH_HZmc.js";import"./IconInfo-CneAHasc.js";import"./IconCheckmark-DsiJoI0N.js";import"./Empty-DIjCIYzO.js";import"./Image-DoqXa-ve.js";import"./Input-uLT8_lPj.js";import"./IconCheckmarkCircleFilled-DKewkGKu.js";import"./IconChevronLeft-B66tqjpM.js";import"./IconCaretDownFilled-Bm6D_ZSy.js";import"./extends-CF3RwP-h.js";import"./Tab-5lFR3Me9.js";import"./Badge-DIrpqdDk.js";import"./IconMore-BdD9rIKV.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
