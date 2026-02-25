import{j as o}from"./jsx-runtime-k_MLO1Wb.js";import{r as b}from"./iframe-sgfNtyBG.js";import{M,a as f}from"./Popover-DfYLZS27.js";import{a as x}from"./IconArrowDownloadFilled-Or44usGD.js";import{S as T}from"./index-BRLdStLU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-XhOZWseF.js";import"./types-DtgUqQ59.js";import"./helpers-hQnIkfdi.js";import"./IconDismiss-JNGl_Oie.js";import"./Tooltip-BJJnaT8T.js";import"./Text-D3S4jZTF.js";import"./Button-apInVggO.js";import"./Link-DAQjDcBV.js";import"./NestedMenu-tbTaIPLQ.js";import"./index-DpRnm5po.js";import"./CollapseGroup-YxBufAcS.js";import"./Divider-3EUK_g-7.js";import"./AnimatePresenceWrapper-DfcX3WMP.js";import"./IconChevronDown-CZRQuyiZ.js";import"./IconChevronUp-BokKfuM4.js";import"./IconChevronRight-CCS6bZAB.js";import"./AvatarGroup-kZwYBRNJ.js";import"./DropzoneFileUpload-CxRiydLZ.js";import"./Label-24isxuk5.js";import"./useFormProps-CnzDY0Jq.js";import"./ErrorMessage-DMJk2C3s.js";import"./IconDynamicComponent-C4baUpSP.js";import"./Snackbar-gZE74k1D.js";import"./Alert-DNDZJPmQ.js";import"./IconDismissFilled-HCXdCHvN.js";import"./Progress-_a62wQ8w.js";import"./IconAdd-ByvsirY7.js";import"./Checkbox-BfCnGSQF.js";import"./IconInfo-CFMYQ6qS.js";import"./IconCheckmark-BqRZNnOv.js";import"./Empty-BTD-FWtc.js";import"./Image-BrMIwJi5.js";import"./Input-Dc-fuwkB.js";import"./IconCheckmarkCircleFilled-pbW960e6.js";import"./IconChevronLeft-Bz_Qh2B8.js";import"./IconCaretDownFilled-BvBIxgj6.js";import"./extends-CF3RwP-h.js";import"./Tab-BRHtPkFi.js";import"./Badge-BjK86V8D.js";import"./IconMore-DdCU4bZV.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
