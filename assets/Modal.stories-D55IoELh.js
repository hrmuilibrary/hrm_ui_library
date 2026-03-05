import{j as o}from"./jsx-runtime-iut7bCLI.js";import{r as b}from"./iframe-DMdrSwrB.js";import{M,a as f}from"./Popover-CQGfM3xk.js";import{a as x}from"./IconArrowDownloadFilled-DkJQElhu.js";import{S as T}from"./index-K-twpmK2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-DFpEcNpv.js";import"./types-obu7jrHv.js";import"./helpers-UaYMJ5Lz.js";import"./IconDismiss-D8ZBO6ts.js";import"./Tooltip-BEnh0xUy.js";import"./Text-Csbx5Mpb.js";import"./Button-BucxkUHf.js";import"./Link-BRXpJSfl.js";import"./NestedMenu-DCawQdXt.js";import"./index-CU_6io2K.js";import"./CollapseGroup-C4xTss2d.js";import"./Divider-Bhf2mux5.js";import"./AnimatePresenceWrapper-VTlFgzP-.js";import"./IconChevronDown-CyGBEWY1.js";import"./IconChevronUp-Du9Azii8.js";import"./IconChevronRight-5MRUfZ0u.js";import"./AvatarGroup-CqUL4fO_.js";import"./DropzoneFileUpload-DAli1GvK.js";import"./Label-Bnt23OWf.js";import"./useFormProps-BXd8NQTR.js";import"./ErrorMessage-BavO4dqa.js";import"./IconDynamicComponent-CGVNtfYX.js";import"./Snackbar-ChnHL36q.js";import"./Alert-BmcFc-5H.js";import"./IconDismissFilled-Cc548mdA.js";import"./Progress-DN7Rgw4h.js";import"./IconAdd-CMcElvt0.js";import"./Checkbox-C8etayjj.js";import"./IconInfo-iFnVagDf.js";import"./IconCheckmark-0fz62h_J.js";import"./Empty-D4wCZb_9.js";import"./Image-IESov31Y.js";import"./Input-CXn6ZTCp.js";import"./IconCheckmarkCircleFilled-B1oCQHMf.js";import"./IconChevronLeft-BwtmZF9p.js";import"./IconCaretDownFilled-DbbPlJRz.js";import"./extends-CF3RwP-h.js";import"./Tab-Bln1R9gF.js";import"./Badge-UoiClwZq.js";import"./IconMore-BkCyC34O.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
