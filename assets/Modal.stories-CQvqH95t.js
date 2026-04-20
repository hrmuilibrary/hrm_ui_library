import{j as o}from"./jsx-runtime-YTRMAMC9.js";import{r as b}from"./iframe-Bz8v1jG0.js";import{M,a as f}from"./Popover-CrUvi3q6.js";import{a as x}from"./IconArrowDownloadFilled-B3C5tfmB.js";import{S as T}from"./index-DwkR8kOc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-CCV_6fZJ.js";import"./types-DTKsVdmf.js";import"./helpers-DdlCvY-8.js";import"./IconDismiss-BIe7PhEs.js";import"./Tooltip-CRvt-Zqu.js";import"./Text-CDgaskpx.js";import"./index-KGRCjFB6.js";import"./Button-Cr1XXYeU.js";import"./Link-CWFVNOtL.js";import"./NestedMenu-CUhjTHG6.js";import"./CollapseGroup-Yk5FX1S_.js";import"./Divider-Do11Yhn9.js";import"./AnimatePresenceWrapper-BTgnW93m.js";import"./IconChevronDown-C5Posxhz.js";import"./IconChevronUp-JKt2DZGc.js";import"./IconChevronRight-CvQ_MXd8.js";import"./AvatarGroup-BClAzU_6.js";import"./DropzoneFileUpload-Dbu0cgAE.js";import"./Label-CDP5XRmq.js";import"./useFormProps-Dq12Q9qE.js";import"./ErrorMessage-BX0YjoTx.js";import"./IconDynamicComponent--deHnbu1.js";import"./Snackbar-DCMce0qW.js";import"./Alert-DKoRs18J.js";import"./IconDismissFilled-DIchfWA5.js";import"./Progress-qpkB18Bi.js";import"./IconAdd-BzTejTfW.js";import"./Checkbox-aplq3Nim.js";import"./IconInfo-CJH8RzHU.js";import"./IconCheckmark-Dyq9mST-.js";import"./Empty-q0vWEhgn.js";import"./Image-BNZZdLqS.js";import"./Input-YpmR1ZPC.js";import"./IconCheckmarkCircleFilled-ZRme8sDX.js";import"./IconChevronLeft-Df0tPASj.js";import"./IconCaretDownFilled-D0rZ1WJU.js";import"./extends-CF3RwP-h.js";import"./Tab-BhQxFWFk.js";import"./Badge-CF9Mkx0G.js";import"./IconMore-CYUPhdM7.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
