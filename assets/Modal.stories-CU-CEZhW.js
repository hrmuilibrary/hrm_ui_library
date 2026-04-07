import{j as o}from"./jsx-runtime-EcFAuVjI.js";import{r as b}from"./iframe-CTWPIPaL.js";import{M,a as f}from"./Popover-CEBnvk9c.js";import{a as x}from"./IconArrowDownloadFilled-CZiN0ETO.js";import{S as T}from"./index-CYeTjpeu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BCkTmoWx.js";import"./types-DJBBpde0.js";import"./helpers-BYBBF6cx.js";import"./IconDismiss-R-ZXLtu8.js";import"./Tooltip-BIWU1OzT.js";import"./Text-BHkxZYtK.js";import"./Button-DiFuwB26.js";import"./Link-spLkLQz7.js";import"./NestedMenu-sOE9HKxy.js";import"./index-CF6owjSp.js";import"./CollapseGroup-Dkn1uouc.js";import"./Divider-De5gT35a.js";import"./AnimatePresenceWrapper-it-LFf1O.js";import"./IconChevronDown-CQ13yH2_.js";import"./IconChevronUp-CqSo8-Mt.js";import"./IconChevronRight-_vT9yChq.js";import"./AvatarGroup-C145vqdB.js";import"./DropzoneFileUpload-BCvoxoAk.js";import"./Label-CAoGIR2C.js";import"./useFormProps-Te3s3i0r.js";import"./ErrorMessage-DLfVzrjG.js";import"./IconDynamicComponent-CBtEbrN8.js";import"./Snackbar-DKxfiGIT.js";import"./Alert-DZcV-LCL.js";import"./IconDismissFilled-Bai9l2aQ.js";import"./Progress-AiGYgwns.js";import"./IconAdd-F132zUj9.js";import"./Checkbox-ByU3c-4h.js";import"./IconInfo-DdF1towk.js";import"./IconCheckmark-1fHjwx4M.js";import"./Empty-Brq0vHX5.js";import"./Image-qK38FBlf.js";import"./Input-Bo5AbQtF.js";import"./IconCheckmarkCircleFilled-CUu2U9Ne.js";import"./IconChevronLeft-DGBuKjva.js";import"./IconCaretDownFilled-5WU-QE5V.js";import"./extends-CF3RwP-h.js";import"./Tab-LPAOTFHH.js";import"./Badge-5wGrLjWG.js";import"./IconMore-B8mTAVQf.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
