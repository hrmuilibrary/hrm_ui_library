import{j as o}from"./jsx-runtime-D99dQDcf.js";import{r as b}from"./iframe-2EQnDXFg.js";import{M,a as f}from"./Popover-S4UYQVhS.js";import{a as x}from"./IconArrowDownloadFilled-DgOwZQwE.js";import{S as T}from"./index-CQDTFQEF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-C8LNWSVT.js";import"./types-8FHqnxYX.js";import"./helpers-C5LKUMWl.js";import"./IconDismiss-B2RNAWcW.js";import"./Tooltip-CnZuVk84.js";import"./Text-CIxaswkQ.js";import"./Button-DwF9doOa.js";import"./Link-DGS7kU04.js";import"./NestedMenu-CVh4Yngp.js";import"./index-DBAwVZwQ.js";import"./CollapseGroup-wCQzYd5S.js";import"./Divider-FRSYcqow.js";import"./AnimatePresenceWrapper-DoE5mqEO.js";import"./IconChevronDown-CBV8Swws.js";import"./IconChevronUp-BNswpLSl.js";import"./IconChevronRight-Cgq6Flkr.js";import"./AvatarGroup-CYUGgDpP.js";import"./DropzoneFileUpload-DTrql-zc.js";import"./Label-CLSG-YjQ.js";import"./useFormProps-nYPXRkPQ.js";import"./ErrorMessage-Cj2QaVd8.js";import"./IconDynamicComponent-C1kP8PQr.js";import"./Snackbar-LwWHoAjr.js";import"./Alert-r5v2OzJ7.js";import"./IconDismissFilled-BJEbcpna.js";import"./Progress-Dg6thBk1.js";import"./IconAdd-DKeTMG05.js";import"./Checkbox-DCuc4UBS.js";import"./IconInfo-C4YrYY_0.js";import"./IconCheckmark-CTAkf_Fh.js";import"./Empty-Ct3UjsDK.js";import"./Image-kYq7DKGf.js";import"./Input-DZ-mpnHr.js";import"./IconCheckmarkCircleFilled-DDCAygOY.js";import"./IconChevronLeft-XaztxdQq.js";import"./IconCaretDownFilled-Dgy4aKsv.js";import"./extends-CF3RwP-h.js";import"./Tab-DXD_EHj5.js";import"./Badge-C-vvmUU6.js";import"./IconMore-C7-wECLD.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
