import{j as e}from"./jsx-runtime-jw5g45zA.js";import{r as i}from"./iframe-UoLQ1U6T.js";import{M as C,N as I}from"./NestedMenu-BnKuMg4r.js";import{B as b}from"./Button-BGsQyanI.js";import{I as y}from"./IconArrowDownloadFilled-CnqYUsEg.js";import{I as g,a as h,b as x}from"./IconBeach-I5GCSGPQ.js";import{I as M}from"./IconMore-BHCXiyvp.js";import{I as O}from"./IconCheckmark-B3b33QsT.js";import{I as n}from"./IconSettings-CbVQExyg.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CGWifcg5.js";import"./index-Bz6UqtXA.js";import"./Text-DTV5SZt-.js";import"./helpers-DE0tJbma.js";import"./index-DYDl_GcV.js";import"./types-Rtio56Mf.js";import"./Popover-Bh2uwmHW.js";import"./IconDismiss-C21Ux5Ke.js";import"./Link-Ce1-gkYz.js";import"./index--cQE6fIL.js";import"./CollapseGroup-D6UEzyIH.js";import"./Divider-D9GF5Ut8.js";import"./AnimatePresenceWrapper-FATxJWWJ.js";import"./IconChevronDown-C8T5NaBg.js";import"./IconChevronUp-Bwxd8oHM.js";import"./IconChevronRight-C-vrEbOC.js";import"./AvatarGroup-oTq43LxX.js";import"./DropzoneFileUpload-DoREZjBj.js";import"./Label-Cpb9f27w.js";import"./useFormProps-BgchZ-Hr.js";import"./ErrorMessage-BQAVRK0H.js";import"./IconDynamicComponent-BJHzMVTt.js";import"./Snackbar-DpIx1uAp.js";import"./Alert-Dj2JC_YX.js";import"./IconDismissFilled-CNebXA1y.js";import"./Progress-CPjuGOZj.js";import"./IconAdd-EENuvl7i.js";import"./Checkbox-NR06R37T.js";import"./IconInfo-CuytgPQY.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
