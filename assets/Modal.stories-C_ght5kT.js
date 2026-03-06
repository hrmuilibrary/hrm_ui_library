import{j as o}from"./jsx-runtime-jw5g45zA.js";import{r as b}from"./iframe-UoLQ1U6T.js";import{M,a as f}from"./Popover-Bh2uwmHW.js";import{a as x}from"./IconArrowDownloadFilled-CnqYUsEg.js";import{S as T}from"./index-DlwmJ_U3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-Bz6UqtXA.js";import"./types-Rtio56Mf.js";import"./helpers-DE0tJbma.js";import"./IconDismiss-C21Ux5Ke.js";import"./Tooltip-CGWifcg5.js";import"./Text-DTV5SZt-.js";import"./Button-BGsQyanI.js";import"./Link-Ce1-gkYz.js";import"./NestedMenu-BnKuMg4r.js";import"./index--cQE6fIL.js";import"./CollapseGroup-D6UEzyIH.js";import"./Divider-D9GF5Ut8.js";import"./AnimatePresenceWrapper-FATxJWWJ.js";import"./IconChevronDown-C8T5NaBg.js";import"./IconChevronUp-Bwxd8oHM.js";import"./IconChevronRight-C-vrEbOC.js";import"./AvatarGroup-oTq43LxX.js";import"./DropzoneFileUpload-DoREZjBj.js";import"./Label-Cpb9f27w.js";import"./useFormProps-BgchZ-Hr.js";import"./ErrorMessage-BQAVRK0H.js";import"./IconDynamicComponent-BJHzMVTt.js";import"./Snackbar-DpIx1uAp.js";import"./Alert-Dj2JC_YX.js";import"./IconDismissFilled-CNebXA1y.js";import"./Progress-CPjuGOZj.js";import"./IconAdd-EENuvl7i.js";import"./Checkbox-NR06R37T.js";import"./IconInfo-CuytgPQY.js";import"./IconCheckmark-B3b33QsT.js";import"./Empty-DJKhs1Z4.js";import"./Image-B5qkZsjJ.js";import"./Input-BUfUBQ-v.js";import"./IconCheckmarkCircleFilled-DH4m_2gO.js";import"./IconChevronLeft-D987Q6Nr.js";import"./IconCaretDownFilled-DW4HAL_T.js";import"./extends-CF3RwP-h.js";import"./Tab-CY_1tz5T.js";import"./Badge-C2_GrtR8.js";import"./IconMore-BHCXiyvp.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
