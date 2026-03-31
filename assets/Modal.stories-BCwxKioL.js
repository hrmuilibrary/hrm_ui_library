import{j as o}from"./jsx-runtime-DQlmkMdY.js";import{r as b}from"./iframe-CmDa5GZP.js";import{M,a as f}from"./Popover-CuckBw2H.js";import{a as x}from"./IconArrowDownloadFilled-C92B9O-R.js";import{S as T}from"./index-pQ0G3NPV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-D0HdYkOZ.js";import"./types-BP9r0hDn.js";import"./helpers-DSCHDZV3.js";import"./IconDismiss-DMw4S2bm.js";import"./Tooltip-BtYOQ9vv.js";import"./Text-zjhjLRes.js";import"./Button-CK3wGp9n.js";import"./Link-CS0TNdkZ.js";import"./NestedMenu-CPeb4Fkg.js";import"./index-Bt98_JU4.js";import"./CollapseGroup-B5ALAsFp.js";import"./Divider-D9mop1G_.js";import"./AnimatePresenceWrapper-NGN9_L93.js";import"./IconChevronDown-B8ksVx3J.js";import"./IconChevronUp-Cf1rS0kG.js";import"./IconChevronRight-CrRiJEm3.js";import"./AvatarGroup-DixyKW5V.js";import"./DropzoneFileUpload-BVnk-D5n.js";import"./Label-2DKiy3Dq.js";import"./useFormProps-Bvb1DugD.js";import"./ErrorMessage-BbD_a1-B.js";import"./IconDynamicComponent-BjJ3mRJP.js";import"./Snackbar-djLHe3oD.js";import"./Alert-Js6i0Y5o.js";import"./IconDismissFilled-ClG4b6KL.js";import"./Progress-D-MJIzzt.js";import"./IconAdd-CkDjvSh9.js";import"./Checkbox-DYWFks94.js";import"./IconInfo-2jJEvtoo.js";import"./IconCheckmark-BlR6bumK.js";import"./Empty-CkaNVBkf.js";import"./Image-BE2xgQ6M.js";import"./Input-3Um20dmt.js";import"./IconCheckmarkCircleFilled-CyHyJAyE.js";import"./IconChevronLeft-bjRjRpEu.js";import"./IconCaretDownFilled-spD6vRgh.js";import"./extends-CF3RwP-h.js";import"./Tab-Cgfj5uqC.js";import"./Badge-C6YyymlT.js";import"./IconMore-Dc_WrV2A.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
