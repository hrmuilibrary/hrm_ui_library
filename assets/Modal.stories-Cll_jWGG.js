import{j as o}from"./jsx-runtime-jvqcDqZy.js";import{r as b}from"./iframe-B_zgtzDa.js";import{M,a as f}from"./Popover-DgoG2FSA.js";import{a as x}from"./IconArrowDownloadFilled-CXkSvE27.js";import{S as T}from"./index-CHSUhujq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-D0EPLcYk.js";import"./types-c8iQqNoH.js";import"./helpers-DhlGc6X_.js";import"./IconDismiss-DCq767p3.js";import"./Tooltip-DfdEBBFt.js";import"./Text-Bx6CJsp0.js";import"./index-C_Oao2cn.js";import"./Button-DufHvJb9.js";import"./Link-BCFg0Pii.js";import"./NestedMenu-jcRSOyJV.js";import"./CollapseGroup-DPUFQJVG.js";import"./Divider-V75lJ8r-.js";import"./AnimatePresenceWrapper-Bq6prjSL.js";import"./IconChevronDown-BDCvQIYR.js";import"./IconChevronUp-e3E9fK36.js";import"./IconChevronRight-Vt3kaAO1.js";import"./AvatarGroup-Dc3vZws6.js";import"./DropzoneFileUpload-WLmH_9zw.js";import"./Label-CR8YcQWh.js";import"./useFormProps-DoNhw9-j.js";import"./ErrorMessage-du3SKR53.js";import"./IconDynamicComponent-nEWCBlK_.js";import"./Snackbar-CkCghYxh.js";import"./Alert-CkIgC-CU.js";import"./IconDismissFilled-BmOKUT74.js";import"./Progress-CyWruvhb.js";import"./IconAdd-DF0Nu-xN.js";import"./Checkbox-DiwYPT6X.js";import"./IconInfo-dmMgprtB.js";import"./IconCheckmark-DmAewHoT.js";import"./Empty-CNr0C1Fi.js";import"./Image-DzorOVc-.js";import"./Input-gbf3jRpv.js";import"./IconCheckmarkCircleFilled-Bz3XgM6S.js";import"./IconChevronLeft-DCNEaSbh.js";import"./IconCaretDownFilled-Di_WpnGl.js";import"./extends-CF3RwP-h.js";import"./Tab-CD5EJd5h.js";import"./Badge-ChjDKMzL.js";import"./IconMore-OWO_CFOZ.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
