import{j as o}from"./jsx-runtime-Wefg3lyS.js";import{r as b}from"./iframe-D5-37b9-.js";import{M,a as f}from"./Popover-CqlmAhVV.js";import{a as x}from"./IconArrowDownloadFilled-D8cFrvw7.js";import{S as T}from"./index-BvnuV9_L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BEiQ90SW.js";import"./types-Ce9ZT5UI.js";import"./helpers-gxvJZqSs.js";import"./IconDismiss-BjanH4_j.js";import"./Tooltip-DONH23QR.js";import"./Text-DGHk6ThX.js";import"./Button-BL0ENPi6.js";import"./Link-D0EeU3RN.js";import"./NestedMenu-CC1wXnzR.js";import"./index-Cl4GZ-nU.js";import"./CollapseGroup-D8lpur--.js";import"./Divider-OVlzqoOr.js";import"./AnimatePresenceWrapper-DbiWYhd2.js";import"./IconChevronDown-CdRdg2ZA.js";import"./IconChevronUp-z4VyNy_S.js";import"./IconChevronRight-6twQFcSx.js";import"./AvatarGroup-dzYPj-Qs.js";import"./DropzoneFileUpload-D_NH9XmF.js";import"./Label-DOznAunB.js";import"./useFormProps-udNsIH1U.js";import"./ErrorMessage-BGWPfiD7.js";import"./IconDynamicComponent-BEeeleGW.js";import"./Snackbar-DUkkiiFs.js";import"./Alert-BmCkEfHc.js";import"./IconDismissFilled-Duf72ET3.js";import"./Progress-CkIE0yFV.js";import"./IconAdd-DyecdZ7D.js";import"./Checkbox-7sxLjJXm.js";import"./IconInfo-CaHzqD_0.js";import"./IconCheckmark-CeacOGVm.js";import"./Empty-W0aqlv62.js";import"./Image-b7hN13YL.js";import"./Input-DQUJ_L4L.js";import"./IconCheckmarkCircleFilled-BOKMGzz5.js";import"./IconChevronLeft-BAU-ETrC.js";import"./IconCaretDownFilled-BzmWE1P9.js";import"./extends-CF3RwP-h.js";import"./Tab-CvEmPdJn.js";import"./Badge-C6UkTnOY.js";import"./IconMore-BbvptjRt.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
