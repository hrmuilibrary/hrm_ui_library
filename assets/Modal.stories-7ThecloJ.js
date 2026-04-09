import{j as o}from"./jsx-runtime-BGdV4lnB.js";import{r as b}from"./iframe-9sKbWilt.js";import{M,a as f}from"./Popover-D0qYUwq_.js";import{a as x}from"./IconArrowDownloadFilled-tBme3huM.js";import{S as T}from"./index-NZnUOi3Y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-ClloYIFO.js";import"./types-DWYYnZzs.js";import"./helpers-Dref4Ux9.js";import"./IconDismiss-OpC_HWHe.js";import"./Tooltip-CtSk3JAR.js";import"./Text-B87HRLXo.js";import"./index-DRTS29y2.js";import"./Button-DH_bd297.js";import"./Link-CR2x0voN.js";import"./NestedMenu-CxVPFey-.js";import"./CollapseGroup-BcOSqHtW.js";import"./Divider-BMcaOP2b.js";import"./AnimatePresenceWrapper-DiA0K_py.js";import"./IconChevronDown-B9Ixfv6r.js";import"./IconChevronUp-lEcB5jQK.js";import"./IconChevronRight-C9hO-Esa.js";import"./AvatarGroup-BK4l0qRr.js";import"./DropzoneFileUpload-DcKo0KoG.js";import"./Label-Ci3S1CnF.js";import"./useFormProps-DIMM2c9_.js";import"./ErrorMessage-BuzKSLfv.js";import"./IconDynamicComponent-DTXNlZK2.js";import"./Snackbar-DS1hSjdw.js";import"./Alert-3To5SJjb.js";import"./IconDismissFilled-CXJDOH8I.js";import"./Progress-DJCJBeSl.js";import"./IconAdd-O_WqtytC.js";import"./Checkbox-B47HAKyq.js";import"./IconInfo--CzC5W2H.js";import"./IconCheckmark-BheMU-fL.js";import"./Empty-CE7lxtzF.js";import"./Image-B65uljmq.js";import"./Input-B7yQzNRE.js";import"./IconCheckmarkCircleFilled-me362f6-.js";import"./IconChevronLeft-DOVQg069.js";import"./IconCaretDownFilled-E1L1uDH9.js";import"./extends-CF3RwP-h.js";import"./Tab-DJ772iA7.js";import"./Badge-CioGb20A.js";import"./IconMore-DE1NoYt7.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
