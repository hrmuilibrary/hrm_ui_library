import{j as o}from"./jsx-runtime-hwX9V3EI.js";import{r as b}from"./iframe-Bgmt94v0.js";import{M,a as f}from"./Popover-CM1M1Uce.js";import{a as x}from"./IconArrowDownloadFilled-pl2oAyCs.js";import{S as T}from"./index-DVZdixSa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-BExM_KhQ.js";import"./types-BlNiBLbf.js";import"./helpers-CDIMvFnB.js";import"./IconDismiss-q7dhilH3.js";import"./Tooltip-DxdoYt44.js";import"./Text-BQUHQN5O.js";import"./Button-t0A4OZ3E.js";import"./Link-BvemiQTT.js";import"./NestedMenu-H7HvTDeF.js";import"./index-DvdIAn_G.js";import"./CollapseGroup-xXAhWhzZ.js";import"./Divider-Df_ANz57.js";import"./AnimatePresenceWrapper-DqeL9g6S.js";import"./IconChevronDown-CSEpZ54x.js";import"./IconChevronUp-CW3iU-P2.js";import"./IconChevronRight-CI7Pq4-y.js";import"./AvatarGroup-_Wriquif.js";import"./DropzoneFileUpload-JRyOlM74.js";import"./Label-Bkl8A_5Z.js";import"./useFormProps-sqPfNzmN.js";import"./ErrorMessage-DGfrKqGZ.js";import"./IconDynamicComponent-D4Ht04XP.js";import"./Snackbar-ph8EgU71.js";import"./Alert-DBWkq2gf.js";import"./IconDismissFilled-DQADTNHy.js";import"./Progress-Cr04DOSl.js";import"./IconAdd-CbF28iPJ.js";import"./Checkbox-DEssy2Th.js";import"./IconInfo-BOIFMgKC.js";import"./IconCheckmark-BOMz0olO.js";import"./Empty-CHFFv713.js";import"./Image-BQLp74FM.js";import"./Input-C-ETxn0M.js";import"./IconCheckmarkCircleFilled-C4ufrUQa.js";import"./IconChevronLeft-CJgM-6g4.js";import"./IconCaretDownFilled-BMgvFwV5.js";import"./extends-CF3RwP-h.js";import"./Tab-DeKldA6e.js";import"./Badge-DuYeSlOp.js";import"./IconMore-CBXWOJFt.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
