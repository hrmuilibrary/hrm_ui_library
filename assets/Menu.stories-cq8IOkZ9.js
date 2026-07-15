import{j as e}from"./jsx-runtime-BRo0dRln.js";import{r as i}from"./iframe-Df6ydCmU.js";import{M as C,N as I}from"./NestedMenu-BmPa5zoF.js";import{B as b}from"./Button-CEVX5wQD.js";import{I as y}from"./IconArrowDownloadFilled-Bt-w8s1M.js";import{I as g,a as h,b as x}from"./IconBeach-D3R1G4xU.js";import{I as M}from"./IconMore-BRlRu8cB.js";import{I as O}from"./IconCheckmark-CREx5DC8.js";import{I as n}from"./IconSettings-Hv41jJW4.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-9oIYVppK.js";import"./index-uhJ2DGy9.js";import"./Text-ju6fPfkC.js";import"./helpers-DDNHwo94.js";import"./index-AboGxAif.js";import"./types-AEozFDqJ.js";import"./index-BxxD5l5m.js";import"./useOnOutsideClick-c55ucTpN.js";import"./CollapseGroup-BXKnOhLv.js";import"./Divider-Cw4cSSrW.js";import"./AnimatePresenceWrapper-DT1aPD55.js";import"./IconChevronDown-CDOH4JhL.js";import"./IconChevronUp-DadG5FCU.js";import"./IconChevronRight-Brqmt0pT.js";import"./AvatarGroup-Fd4UpgbH.js";import"./DropzoneFileUpload-D2QnuYSG.js";import"./Label-BBibkuQz.js";import"./useFormProps-DA0V_ddt.js";import"./ErrorMessage-BHWHIMa5.js";import"./IconDynamicComponent-DH1Zmgrl.js";import"./Snackbar-CUoXrSXz.js";import"./Alert-Cufajo-U.js";import"./IconDismissFilled-DGc9p86o.js";import"./Progress-B9vvoEyB.js";import"./IconAdd-BT5ZfQ73.js";import"./Checkbox-D5JR07Kf.js";import"./Popover-BVl0OFQ2.js";import"./IconDismiss-DAnp02IF.js";import"./Link-BFkGU7ih.js";import"./IconInfo-CUFyot7F.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
